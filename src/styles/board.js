///libs
import {css} from 'glamor';

/// JSObject with styles to use in component
export default {
  table : css({
    width : '95%',
    height : '95%',
    margin: 'auto',
    display : 'flex',
    
  }),
  container : css({
    width: '85vh',
    height : '85vh',
    margin : '10px auto',
    borderRadius : '5%',
    backgroundColor : '#c07020',
    display : 'flex',
    verticalAlign : 'middle',
  },
  {
    '@media (max-width : 1240px)' : {
      width: '85vw',
      height : '85vw',
      maxWidth : '85vh',
      maxHeight : '85vh',
    }
  }),
  rw : css({
    margin : '0 auto',
    flexDirection : 'row',
    alignItems : 'stretch'
  }),
  tbody : css({
    margin: '0 auto',
    alignItems : 'center',
    display : 'flex'
  })

}

//alignItems : 'stretch',
//flexWrap : 'wrap',
//flexDirection : "row",