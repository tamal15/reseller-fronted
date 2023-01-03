import React from 'react';
import Header from '../../../Shared/Header/Header';
import './UpdateCollection.css';
import { Link } from 'react-router-dom';
const UpdateCollection = () => {
    return (
        <div>
<Header></Header>


            <div className="container mt-5">

            <h1 className='explores-design'>For Those with a Mind for <span className='choice-designs'>Design <br></br>
EXPLORE</span> FOR YOUR CHOICE</h1>

            <div className="row">
                <div className="col-lg-6">

                    <h2 className='upadate-dress'>Trendy Tees that you <span className='dress'>just can't miss !</span></h2>

                    <h4 className='summer'>This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</h4>

                  <div className='collected-button'>
                 <a href="/all-categories"> <button to='/tat' className='shop-button'>Shop Collection</button> </a> 
                  </div>

                </div>
                <div className="col-lg-6">

                    {/* start  */}

                    <div className="row">
                    <div className="col-lg-4">
                        <div className="row collections">
                        <img  className='collection mb-3 ' src="https://static-01.daraz.com.bd/p/9e0d518ccf84044f48d05eab88e7ad36.jpg"/>
                        </div>
                        <div className="row collections">
                        <img  className='collection' src="https://wedbook.in/wp-content/uploads/2020/10/5.-Hot-Pink-Bridal-Lehenga--819x1024.jpg"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://static-01.daraz.com.bd/p/31b48626f24908e84992cdbf76643c73.jpg"/>
                        </div>
                        <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://assets.ajio.com/medias/sys_master/root/20220617/z8Nf/62ac3ce0f997dd03e285d8f2/-473Wx593H-464426880-red-MODEL.jpg"/>
                        </div>
                        <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://stylesatlife.com/wp-content/uploads/2018/05/Embroidered-Net-Saree.jpg.webp"/>
                        </div>
                       
                    </div>
                    <div className="col-lg-4">
                    <div className="row collections">
                        <img  className=' mb-3 collections' src="https://udaipurbazar.com/images/thumbs/0000538_designer-green-kanjivaram-jacquard-silk-saree_510.jpeg"/>
                        </div>
                        <div className="row collections">
                        <img  className=' mb-3 collections' src="https://wedbook.in/wp-content/uploads/2020/10/5.-Hot-Pink-Bridal-Lehenga--819x1024.jpg"/>
                        </div>
                    </div>
                    

                </div>


                    {/* end  */}
                </div>
            </div>




            {/* start industry */}


          <div className='potter-update'>
          <div className="row">
                <div className="col-lg-6">

                    <h2 className='upadate-dress'>Trendy Tees that you <span className='dress'>just can't miss !</span></h2>

                    <h4 className='summer'>This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</h4>

                  <div className='collected-button'>
                 <a href='/pottery'> <button className='shop-button'>Shop Collection</button> </a> 
                  </div>

                </div>
                <div className="col-lg-6">

                    {/* start  */}

                    <div className="row">
                    <div className="col-lg-4">
                        <div className="row collections">
                        <img  className='collection mb-3 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKIFyy907nZqcdmFEEr6HUViTVogV8RxOi_AnUMnf3vxOq9OHMqaDuNw3OJDt3rsiriY&usqp=CAU"/>
                        </div>
                        <div className="row collections">
                        <img  className='collection' src="https://c8.alamy.com/zooms/9/8150b2cf90fb4c0cb616586dc4a0416f/hyrtwm.jpg"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap3KofMYCeHaKjjI8c6pgkdA5vvBh3GSwD5WCx7AIQcf-9TXO8pWt-O7-5GO3BTmiGqk&usqp=CAU"/>
                        </div>
                        <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://c8.alamy.com/comp/HYRTWA/colourful-clay-pots-locally-called-shokher-hari-display-at-lok-o-karushilpo-HYRTWA.jpg"/>
                        </div>
                        <div className="row collectionss">
                        <img  className=' mb-3 collections' src="https://c8.alamy.com/comp/HYRTYM/colourful-clay-pots-locally-called-shokher-hari-display-at-lok-o-karushilpo-HYRTYM.jpg"/>
                        </div>
                       
                    </div>
                    <div className="col-lg-4">
                    <div className="row collections">
                        <img  className=' mb-3 collections' src="https://c8.alamy.com/comp/HYRTTF/handicrafts-display-at-lok-o-karushilpo-mela-at-sonargaon-narayanganj-HYRTTF.jpg"/>
                        </div>
                        <div className="row collections">
                        <img  className=' mb-3 collections' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKIFyy907nZqcdmFEEr6HUViTVogV8RxOi_AnUMnf3vxOq9OHMqaDuNw3OJDt3rsiriY&usqp=CAU"/>
                        </div>
                    </div>
                    

                </div>


                    {/* end  */}
                </div>
            </div> 
          </div>



            {/* end industrry  */}

            </div>
            
        </div>
    );
};

export default UpdateCollection;