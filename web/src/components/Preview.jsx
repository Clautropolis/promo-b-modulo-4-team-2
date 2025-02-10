import Card from "./Card";
import '../styles/Preview.scss';
import ebook from '../images/ebook-example.jpg';
import PropTypes from 'prop-types';

function Preview({dataCard}) {
  const projectImg = dataCard.image === '' ? ebook : dataCard.image;
  return (
    <section className="preview">
        <div className="projectImage" style={{ backgroundImage: `url(${projectImg})` }}></div>
        <Card dataCard={dataCard}/>
    </section>
  )
}
Preview.propTypes = {
  dataCard : PropTypes.object,
}

export default Preview