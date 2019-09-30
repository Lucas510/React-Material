import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.secondary.light,

  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

 /* The example data is structured as follows: 
  import image from 'path/to/image.jpg';
  [etc...]*/
 
  const tileData = [
    {
      img: 'https://houseofswitzerland.org/sites/default/files/styles/portrait/public/story/portrait/michal-grosicki-239853_1.jpg?h=4a7d1ed4&itok=VcgXYz5x',
      title: 'Lindt & Sprüngli',
      author: 'author',
    },
    {
      img: 'https://previews.123rf.com/images/lovleah/lovleah1102/lovleah110200138/8932631-toblerone-chocolate-containing-honey-and-almond-nougat-and-crispy-rice-pieces-toblerone-packaging-in.jpg',
      title: 'Toblerone',
      author: 'author',
    },
    {
      img: 'https://www.coopathome.ch/img/produkte/880_880/RGB/4354025_001.jpg?_=1519743564720',
      title: 'Cailler',
      author: 'author',
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/71w7aVyGIiL._SL1500_.jpg',
      title: 'Frey',
      author: 'author',
    },
    {
      img: 'https://previews.123rf.com/images/burnel1/burnel11605/burnel1160500004/55917097-pula-croatia-may-1-2016-studio-shot-of-a-swiss-milka-chocolate-manufactured-by-mondelez-internationa.jpg',
      title: 'Milka Swiss Chocolate',
      author: 'author',
    },
    {
      img: 'https://static.toiimg.com/photo/56809044/.jpg',
      title: 'Swiss chocolate Chalet',
      author: 'author',
    }
  ];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);