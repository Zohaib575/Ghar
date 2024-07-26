

import { getDiscountedPricePercentage } from "@/utils/helper";

import "react-toastify/dist/ReactToastify.css";


  const p = product?.data?.[0]?.attributes;
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left start  */}
          <div className="w-full md:w-auto flex-[0.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarousel images={p.image.data} />
        
          </div>
     

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>
       
           
          </div>
          {/* right end  */}
        </div>

        <RelatedProperty products={products} />
      </Wrapper>
    </div>
  );


export default ProductDetails;
