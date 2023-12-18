import {useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Produtimg(){

    const options = {
        responsiveClass: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                margin:10,
                items: 3,
            }
        },
    };

    useEffect(() => {
 $('.product_click').on('click',  function(){
 $('#Product_view').prop('src', this.src);
  });

  var $loupe = $(".loupe"),
    loupeWidth = $loupe.width(),
    loupeHeight = $loupe.height();

$(document).on("mouseenter", ".cart_imgZoom", function (e) {
    var $currImage = $(this),
        $img = $('<img/>')
        .attr('src', $('img', this).attr("src"))
        .css({ 'width': $currImage.width() * 2, 'height': $currImage.height() * 2 });

    $loupe.html($img).fadeIn(100);
    
    $(document).on("mousemove",moveHandler);
                   
    function moveHandler(e) {
        var imageOffset = $currImage.offset(),
            fx = imageOffset.left - loupeWidth / 2,
            fy = imageOffset.top - loupeHeight / 2,
            fh = imageOffset.top + $currImage.height() + loupeHeight / 2,
            fw = imageOffset.left + $currImage.width() + loupeWidth / 2;
        
        $loupe.css({
            'left': e.pageX - 75,
            'top': e.pageY - 75
        });

        var loupeOffset = $loupe.offset(),
            lx = loupeOffset.left,
            ly = loupeOffset.top,
            lw = lx + loupeWidth,
            lh = ly + loupeHeight,
            bigy = (ly - loupeHeight / 4 - fy) * 2,
            bigx = (lx - loupeWidth / 4 - fx) * 2;

        $img.css({ 'left': -bigx, 'top': -bigy });

        if (lx < fx || lh > fh || ly < fy || lw > fw) {
            $img.remove();
            $(document).off("mousemove",moveHandler);
            $loupe.fadeOut(100);
        }
    }
});
});

 
    return(
        <>
            <div className="cart_imgZoom">             
   <img src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" id="Product_view" width="100%"/>
            </div>
            <div class="loupe"></div>
                <OwlCarousel className='owl-theme mt-4'   nav  {...options} >
                    <div className='item'>
          <img className="product_click"  src="https://cdn.pixabay.com/photo/2023/05/16/10/53/technology-7997259_960_720.jpg" alt=""/>
                          </div>

                         <div className='item'>
              <img  className="product_click"  src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390798_960_720.jpg" alt=""/>
                             </div>

                             <div className='item'>
      <img  className="product_click"  src="https://cdn.pixabay.com/photo/2023/11/15/18/55/computer-8390795_960_720.jpg" alt=""/>
                             </div>
                    </OwlCarousel>

        </>
    )
}

export default Produtimg;