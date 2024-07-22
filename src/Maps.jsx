import React, { useEffect, useState } from 'react';
import "./nuevo.css";

const Maps = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [geoError, setGeoError] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    let map;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setUserLocation(userLatLng);
                    if (!isScriptLoaded) {
                        loadGoogleMapsScript().then(() => {
                            setIsScriptLoaded(true);
                            initMap(userLatLng);
                            findNearbyRestaurants(userLatLng);
                        }).catch((error) => {
                            console.error('Error al cargar el script de Google Maps:', error);
                        });
                    } else {
                        initMap(userLatLng);
                        findNearbyRestaurants(userLatLng);
                    }
                },
                (error) => {
                    console.error('Error al obtener la ubicación del usuario:', error);
                    setGeoError(error.message);
                }
            );
        } else {
            console.error('Geolocalización no está soportada por este navegador.');
        }
    }, [isScriptLoaded]);

    const initMap = (userLatLng) => {
        const { Map } = window.google.maps;
        map = new Map(document.getElementById("map"), {
            center: userLatLng,
            zoom: 15,
        });
    };

    const findNearbyRestaurants = (userLatLng) => {
        const service = new window.google.maps.places.PlacesService(map);

        const request = {
            location: new window.google.maps.LatLng(userLatLng.lat, userLatLng.lng),
            radius: '5000',  
            type: ['restaurant']
        };

        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setRestaurants(results);
            } else {
                console.error('Error en la búsqueda de lugares:', status);
            }
        });
    };

    const handleShare = (restaurant) => {
        const phoneNumber = '+528135654041';
        const message = encodeURIComponent(`Este lugar es recomendado: ${restaurant.name} - ${restaurant.vicinity}`);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
            {geoError ? (
                <p>{geoError}. Por favor, permita el acceso a la ubicación y recargue la página.</p>
            ) : (
                <div>
                    <h3>Restaurantes Cercanos:</h3>
                    {restaurants.length > 0 ? (
                        <ul>
                            {restaurants.map((restaurant) => (
                                <div className='nn' key={restaurant.place_id}>  
                                    <div className="arriba">  
                                        <img src={restaurant.icon} alt="" />
                                        <li>
                                            {restaurant.name} - {restaurant.vicinity}
                                        </li> 
                                    </div>
                                    <button className='bbn' onClick={() => handleShare(restaurant)}>Compartir</button>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p>Buscando restaurantes cercanos...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Maps;

const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBT6zx6h6AO_z7D0qHJzql9PvbJ4wDmklc&libraries=places';
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};
