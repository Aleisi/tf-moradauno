import Banner from './Banner'
import image01 from "../img/image01.png"
import '../css/Files.scss';

export default function Files() {
  return (
    <main className= "upload-files">
        <Banner/>
      <div className= "img-file">
        <img className="img-upload" src={image01} alt="img-upload"/>
      
        <button className="btn-upload-image">Carga tu imagen aquí</button>

      </div>
    </main>
  );
}
