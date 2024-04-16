import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Map = () => {
  return (
    <> 
    <div className="shadow-xl flex flex-col items-center justify-center overflow-hidden rounded-3xl">
    <MapContainer center={[30.0298, 31.4677]} zoom={13} className='h-96 w-full'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=''
            />
            <Marker position={[30.0298, 31.4677]}>
                <Popup >
                    <img src="../assets/Pizza-Logo.png" alt="logo"/>
                </Popup>
            </Marker>
        </MapContainer>
</div>
    </>
  );
};

export default Map;
