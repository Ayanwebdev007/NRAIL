import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ChevronDown, Maximize2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix for default marker icon issues in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// --- Custom Premium Icon Generator ---
const createCustomIcon = () => {
    // We render the Lucide React component to static markup to use inside Leaflet's divIcon
    const iconMarkup = renderToStaticMarkup(
        <div className="relative flex items-center justify-center w-12 h-12">
            {/* Pulsing Outer Ring */}
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-30 animate-ping"></div>
            {/* Solid Outer Ring */}
            <div className="absolute inset-2 bg-white rounded-full shadow-lg"></div>
            {/* Inner Red Circle */}
            <div className="absolute inset-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            </div>
            {/* Needle Point */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-700 rotate-45 transform origin-center rounded-sm"></div>
        </div>
    );

    return L.divIcon({
        html: iconMarkup,
        className: 'custom-leaflet-icon', // We'll need to make sure this class doesn't override flex centering
        iconSize: [48, 48],
        iconAnchor: [24, 48], // Tip of the pin
        popupAnchor: [0, -48]  // Popup above the pin
    });
};

const premiumIcon = createCustomIcon();


const locations = [
    {
        id: 1,
        name: "Unit V (PM1)",
        code: "Unit V, Plot No. 169/2, GIDC, Vapi - 396195",
        region: "Gujarat, India",
        lat: 20.30165769545624,
        lng: 72.86702364617466,
        link: "https://www.google.com/maps/search/?api=1&query=20.30165769545624,72.86702364617466"
    },
    {
        id: 2,
        name: "Unit I",
        code: "Plot No. 169/1, GIDC, Vapi - 396195",
        region: "Gujarat, India",
        lat: 20.371232173507327,
        lng: 72.92940450288985,
        link: "https://www.google.com/maps/search/?api=1&query=20.371232173507327,72.92940450288985"
    },
    {
        id: 3,
        name: "Unit V (PM2)",
        code: "Unit V, Plot No. 169/2, GIDC, Vapi - 396195",
        region: "Gujarat, India",
        lat: 20.301699611726335,
        lng: 72.86465996366665,
        link: "https://www.google.com/maps/search/?api=1&query=20.301699611726335,72.86465996366665"
    },
    {
        id: 4,
        name: "UNIT VI",
        code: "502-A/501-B, Fortune Terraces, 5th Floor, Opp. Citi Mall, New Link Road, Andheri (West), Mumbai 400 053",
        region: "Maharashtra, India",
        lat: 19.138899970114217,
        lng: 72.83216446655372,
        link: "https://www.google.com/maps/search/?api=1&query=19.138899970114217,72.83216446655372"
    }
];

// Component to handle map flying (smooth pan/zoom)
function MapFlyTo({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                duration: 1.5,
                easeLinearity: 0.25
            });
        }
    }, [center, zoom, map]);
    return null;
}

const OurLocation = () => {
    const [activeLocation, setActiveLocation] = useState(null);
    const markerRefs = useRef({}); // Store refs to markers

    // Initial Overview Center (Visual center between Vapi and Mumbai)
    const initialCenter = [19.85, 72.95];
    const initialZoom = 8; // Zoomed out to see both Vapi and Mumbai

    // Active state derived values
    const mapCenter = activeLocation ? [activeLocation.lat, activeLocation.lng] : initialCenter;
    const mapZoom = activeLocation ? 16 : initialZoom;

    // Effect to open popup when activeLocation changes via button click
    useEffect(() => {
        if (activeLocation && markerRefs.current[activeLocation.id]) {
            markerRefs.current[activeLocation.id].openPopup();
        }
    }, [activeLocation]);

    return (
        <section style={{ paddingTop: '80px' }} className="relative w-full pb-24 bg-white overflow-hidden font-[Outfit]">

            <div style={{ width: '85%', maxWidth: '1600px', margin: '0 auto' }} className="relative z-10 flex flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[2px] w-12 bg-red-600"></div>
                        <span className="text-red-600 font-bold tracking-widest text-sm uppercase">Footprints</span>
                        <div className="h-[2px] w-12 bg-red-600"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        OUR <span className="text-red-600">LOCATION</span>
                    </h2>

                </motion.div>

                {/* Location Bars */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full mx-auto">
                    {locations.map((loc) => (
                        <motion.button
                            key={loc.id}
                            onClick={() => setActiveLocation(loc)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: loc.id * 0.1 }}
                            className={`flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 flex-1 hover:shadow-lg hover:-translate-y-1 ${activeLocation?.id === loc.id
                                ? 'bg-red-600 border-red-600 text-white shadow-xl scale-105 z-10'
                                : 'bg-white border-gray-100 text-gray-900 hover:border-red-200'
                                }`}
                        >
                            <div className={`p-3 rounded-full mb-3 ${activeLocation?.id === loc.id ? 'bg-white/20 text-white' : 'bg-red-50 text-red-600'
                                }`}>
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">{loc.name}</h3>
                            <p className={`text-xs uppercase tracking-wider font-semibold ${activeLocation?.id === loc.id ? 'text-white/80' : 'text-gray-400'
                                }`}>
                                {loc.region}
                            </p>


                        </motion.button>
                    ))}
                </div>

                {/* Explicit Vertical Spacer - Brute Force Gap */}
                <div className="w-full h-8 min-h-[32px] bg-transparent shrink-0"></div>

                {/* Leaflet Map Section */}
                <div className="w-full h-[500px] md:h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-0 mx-auto">
                    <MapContainer
                        center={initialCenter}
                        zoom={initialZoom}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                    >
                        {/* Google Maps Roadmap Tiles */}
                        <TileLayer
                            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                            attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                        />

                        {/* Programmatic FlyTo Controller */}
                        <MapFlyTo center={mapCenter} zoom={mapZoom} />

                        {/* Rendering REAL Markers at Exact Coordinates with Premium Setup */}
                        {locations.map((loc) => (
                            <Marker
                                key={loc.id}
                                position={[loc.lat, loc.lng]}
                                icon={premiumIcon}
                                eventHandlers={{
                                    click: () => setActiveLocation(loc),
                                }}
                                ref={(el) => (markerRefs.current[loc.id] = el)}
                            >
                                <Popup className="premium-popup">
                                    <div className="min-w-[240px]">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="bg-red-50 p-2.5 rounded-xl text-red-600 shrink-0 shadow-sm border border-red-100">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{loc.name}</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed font-medium">{loc.code}</p>
                                            </div>
                                        </div>

                                        <a
                                            href={loc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-red-600 !text-white text-sm font-bold px-4 py-4 rounded-xl hover:bg-red-700 transition-all group shadow-md no-underline"
                                        >
                                            <span>View on Google Maps</span>
                                            <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* View All Button */}
                    {activeLocation && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => {
                                setActiveLocation(null);
                                // Close all popups when viewing all
                                Object.values(markerRefs.current).forEach(marker => {
                                    if (marker) marker.closePopup();
                                });
                            }}
                            style={{ padding: '15px 40px' }}
                            className="absolute top-4 right-4 bg-red-600 rounded-full shadow-lg text-base font-bold text-white hover:bg-white hover:text-red-600 transition-all z-[1000] border border-transparent hover:border-red-600 flex items-center gap-2 tracking-wide"
                        >
                            <Maximize2 className="w-4 h-4" /> View All Units
                        </motion.button>
                    )}
                </div>

                {/* Legend/Note */}
                <div className="mt-8 text-center text-gray-400 text-sm">
                    Interactive Map • Click markers for details
                </div>

            </div>
        </section>
    );
};

export default OurLocation;
