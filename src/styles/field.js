/// libs
import {css} from 'glamor';


// anims
const entry = css.keyframes({
  '0%' : { opacity : 0} ,
  '100%' : { opacity : 1},
});

export const click = css.keyframes({
  '0%' : { transform : 'scale(1)'},
  '50%' : { transform : 'scale(1.1)'},
  '100%' : { transform : 'scale(1)'}
});



// OBJECT with styles to use inside component
export default {
  td : css({
    display : 'flex',
    width : '25vh',
    height : '25vh',
    maxWidth : '25vw',
    maxHeight : '25vw',
    backgroundColor : '#23324e',
    animation : entry +' 1s',
    textAlign : 'center',
    alignItems : 'center',
    margin : '1px',
  },
{
  '@media (max-width : 640px)' : {
    display : 'block',
    width : '25vw',
    height : '25vw',
    maxWidth : '25vh',
    maxHeight : '25vh',
  }

}),
  click : css({
    animation: click + ' 1s',
    boxShadow : '0 0 15px 1px rgba(255,220,46,0.7)',
  }),

  img : css({
    margin : '0 auto',
    width : '100%',
    height : '100%',
  }),
  blocked : css({
    userSelect: 'none',
    WebkitUserSelect : 'none',
    MozUserSelect : 'none',
    MsUserSelect : 'none',
    userDrag : 'none',
    WebkitUserDrag : 'none',
    MozUserDrag : 'none',
    MsUserDrag : 'none',
  }),
};



