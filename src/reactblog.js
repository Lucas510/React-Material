import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import SimpleTable from './Table';


class Header extends React.Component {
  render(){
   const { classses } = this.props; 
    return(
      <div>
        <header style={{width: '100%', backgroundImage: 'url(https://foodandtravel.mx/wp-content/uploads/2019/07/Chocolateoronegro.jpg)',height:'100%'}}>
        </header>
      </div>
    );
  }
} 


class Article extends React.Component {
  render(){
  const { title, description, items } = this.props;
    return(
      <div>

        <h1>{title}</h1>

        <p>{description}</p>

        <List>
        {items.map(i => {
          return (
            <ListItem><b>{i}</b></ListItem>
          )
        })}
        </List>

      </div>
    )
  }
}

class Footer extends React.Component {
  render(){
    const { classes } = this.props;
      return(
        <footer>

          <p>Copyright &copy; 1999- sigue vivo Lucas Arce, todos los derechos reservados.</p>

        </footer>
      )
  }
}


class Blog extends React.Component {
  render(){
    const { classes } = this.props;
    return(
    <div>
      <Header/>
      <Article title="Razones por la cual Suiza es famosa por su chocolate" description="Tanto por su capacidad de innovación como por su sentido de tradición, el chocolate es una fuente del orgullo de Suiza y contribuye a su imagen en el mundo. ¿Pero por qué el chocolate suizo es tan exitoso? Aquí va la respuesta:" items={['1. Un pais pionero en chocolate.', '2. Se funde en tu boca, gracias a una técnica patentada en 1879.', '3. Una industria innovadora.', '4. Chocolate más leche: una combinación ganadora.', '5. Un estándar muy alto de calidad, típico suizo.']}/>
      <Article title="Un pais pionero en chocolate" description="Suiza es uno de los países que primero empezó a producir chocolate, gracias al desempeño de numerosos pioneros. En 1819, François-Louis Cailler abre una fábrica de producción mecanizada en Corsier-sur-Vevey, cerca del Lago de Ginebra. En 1826, Philippe Suchard abrió su fábrica de chocolate en Serrières, cantón de Neuchatel. El número de los chocolatiers se multiplicó hasta fin del siglo XlX – no solamente se hizo popular la elaboración de chocolate, sino que también contribuyó al desarrollo de los conocimientos en esa área." items={['Las primeras fábricas de chocolate se establecieron a finales del siglo XVIII en la Suiza francófona.', '- Vevey', '- Morges', '- Lausana', '- Tesino en el Valle de Blenio.']}/>
      <Article title="Se funde en tu boca, gracias a una técnica patentada en 1879" description="La textura del chocolate suizo es otro elemento garantizando su éxito. Tiene un carácter suave y cremoso que es resultado de una técnica innovadora, conocida como el “conchado”, que homogeniza la masa y permite un desarrollo óptimo del aroma. Inventor de este procedimiento es el creador del primer chocolate que-se-funde-en-la-boca, Rodolphe Lindt. Patentó su método en 1879, cuando dirigía una fábrica de producción en Berna." items={['- Velocidad.', '- Duracion(hasta tres dias).', '- Temperatura del amasado(entre 60 y 75 grados) afectan el sabor.']}/>
      <Article title="Una industria innovadora" description="La industria del chocolate suizo reúne tradición con innovación – ¡uno de los secretos de su éxito! Nuevas recetas y técnicas se están desarrolladas constantemente. Normalmente, son cambios menores que mejoran el proceso de producción. También la investigación participa en la elaboración de nuevos métodos y comparte sus conocimientos con la industria – por ejemplo el círculo de chocolate, liderado del profesor Erich Windhab del instituto de ciencias alimentarias y de nutrición de la ETH Zúrich." items={['- Brillantes sentido empresarial y comercial permitieron fortalecer las innovaciones suizas en la fabricación de chocolates. ', '- Chocolate con avellanas y el concepto de los ‘palitos’ de chocolate.', '- La máquina de conchado (y como resultado, el chocolate 2.0).']}/>
      <Article title="Chocolate más leche: una combinación ganadora" description="En 1875, Daniel Peter pensó en combinar leche con chocolate. Después de numerosos intentos en su fábrica en Vevey, descubrió la combinación perfecta que enseguida se convirtió en un éxito enorme – y uno que iba a ligar a Suiza con el chocolate para siempre." items={['- Daniel Peter: Utilizó la nueva leche en polvo seco producida por su compatriota, un tal Henri Nestlé, para hacer el primer chocolate sólido con leche.', '- La leche y el chocolate resultaron ser un feliz matrimonio.', '- La leche en polvo permitía diluir el fuerte sabor del chocolate, las proteínas de la leche reducían su astringencia y le daban un sabor más suave.']}/>
      <Article title="Un estándar muy alto de calidad, típico suizo" description="Los productos suizos son reconocidos por su calidad, y el chocolate no es una excepción. De hecho, ese alto nivel de calidad no solamente se refleja en la selección de la materia prima, pero también se vincula con la excelencia en ese sector. Según Chocosuisse, un chocolate de buena calidad debería derretirse sobre la lengua sin endurecerse o desintegrarse en la boca. Una persona debería experimentar un sabor de aromas finos y armoniosos del chocolate – sin ningún otro sabor posterior. La misión de la asociación Chocosuisse – compuesta de 18 fábricas – es asegurar la buena calidad." items={['- Abasteciminento Sostenible', '- Producido Sosteniblemente', '- Consumo de manera sostenible']}/>
      <SimpleTable/>
    </div>
    );
  }
}



export default Blog;
export { Footer };





