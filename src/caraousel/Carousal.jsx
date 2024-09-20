import React, { useState } from 'react'
import band from'../band.png'
import one from'../1.jpg'
import two from'../2.jpg'
import three from'../3.jpg'
import four from'../4.jpg'
import './Carousal.css'
function Carousal() {
  const [imgg,setImmg]=useState(null)
  return (
    <div className='whole_corousal'>
      <div className='main_img'>
     {imgg&& <img src={imgg}/>} 
     {!imgg&& <img src={four}/>} 
      </div>
      
     <div className='mult_imgs'>
     <img src={band} onClick={()=>setImmg(band)}/ >
     <img src={two} onClick={()=>setImmg(two)} />
     <img src={three} onClick={()=>setImmg(three)}/>
     <img src={four} onClick={()=>setImmg(four)}/>
     <img src={one} onClick={()=>setImmg(one)}/>
     </div>
   
   <div className='connections_whole'>
<div className='item'>
  
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.141 34.8268C44.8475 31.1897 46.4509 26.6699 46.4509 21.7731C46.4509 9.74798 36.7822 0 24.8553 0C12.9284 0 3.25971 9.74798 3.25971 21.7731C3.25971 26.7449 4.91249 31.3273 7.6943 34.9925L0 42.7502L7.21267 42.7281L7.19082 50L15.6477 41.4736C18.4407 42.8028 21.5619 43.5461 24.8553 43.5461C28.2259 43.5461 31.4161 42.7678 34.2587 41.3793L42.8091 50L42.7873 42.7281L50 42.7502L42.141 34.8268ZM43.1912 21.7731C43.1912 31.9828 34.982 40.2596 24.8553 40.2596C14.7287 40.2596 6.51943 31.9828 6.51943 21.7731C6.51943 11.5633 14.7287 3.2865 24.8553 3.2865C34.982 3.2865 43.1912 11.5633 43.1912 21.7731ZM40.7464 21.7731C40.7464 30.6216 33.6317 37.7948 24.8553 37.7948C16.0789 37.7948 8.96421 30.6216 8.96421 21.7731C8.96421 12.9246 16.0789 5.75138 24.8553 5.75138C33.6317 5.75138 40.7464 12.9246 40.7464 21.7731ZM25.059 13.9676L26.7514 19.2191H32.2282L27.7974 22.4647L29.4898 27.7162L25.059 24.4706L20.6283 27.7162L22.3207 22.4647L17.8899 19.2191H23.3666L25.059 13.9676Z" fill="#3F3631"/>
</svg>

  <div className='txt'></div>
</div>
<div className='item'>
 
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0C11.2196 0 0 11.2104 0 25C0 38.7896 11.2104 50 25 50C38.7896 50 50 38.7896 50 25C50 11.2196 38.7896 0 25 0ZM25 45.6982C22.4576 45.6982 20.0166 45.2376 17.7598 44.3902C18.6717 43.5704 19.6205 41.7833 19.8047 41.203C20.035 40.503 19.2705 38.6883 19.2705 38.329C19.2705 37.9698 17.1242 35.4642 16.5807 35.105C16.0464 34.7458 16.5807 32.7745 16.5807 31.5033C16.5807 30.2321 13.7159 29.5505 12.6382 28.832C11.5604 28.1135 11.2012 30.8032 9.94841 30.269C8.69565 29.7347 8.87068 27.9385 8.69566 26.5107C8.5667 25.4698 5.81247 25.1566 4.30179 25.0553C4.30179 25.0368 4.30179 25.0276 4.30179 25.0092C4.30179 15.9359 10.1695 8.21669 18.3125 5.4256C18.2388 5.4993 18.1559 5.58216 18.0914 5.66507C17.4005 6.6507 16.1109 5.6651 16.461 8.74174C16.811 11.8184 16.3412 13.2461 18.5704 13.6883C20.7904 14.1304 21.6102 13.5777 23.1301 13.6883C24.65 13.7988 24.5578 17.6216 24.9171 17.6861C24.9171 17.6861 26.916 23.1854 32.7653 24.7605C34.0089 25.0921 31.4757 27.6529 29.7255 28.4175C27.9661 29.182 26.3357 29.2926 26.0962 31.1625C25.8567 33.0324 28.5556 31.927 29.2557 32.2587C29.9558 32.5903 32.9864 33.7417 34.2299 32.0284C35.4735 30.315 40.5398 30.8954 40.0792 29.0623C39.0291 24.9079 45.9562 23.0195 43.9388 20.2745C43.4783 19.6481 43.5704 17.7321 43.4322 15.6227C44.8784 18.4414 45.6982 21.6378 45.6982 25.0184C45.6982 36.413 36.4131 45.6982 25 45.6982Z" fill="#3F3631"/>
</svg>

  <div className='txt'>Free Shipping
within USA</div>
</div>
<div className='item'>
 
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.9798 25.9508C46.482 37.66 36.8317 47 25 47C13.4799 47 4.02782 38.1454 3.07842 26.8708C3.28044 26.7281 3.50846 26.5815 3.75325 26.4456C4.38874 26.0929 5.00638 25.8852 5.50604 25.8852C5.52816 25.8852 5.70678 25.904 6.11269 26.2566C6.50709 26.5993 6.91669 27.0757 7.4287 27.6714L7.42981 27.6727C7.90325 28.2236 8.4731 28.8865 9.08698 29.4018C9.69622 29.9133 10.5295 30.4372 11.5464 30.4372C12.8698 30.4372 13.6578 29.4248 14.0748 28.6771C14.5104 27.8958 14.8178 26.9209 15.058 26.1139C15.1133 25.9281 15.1652 25.7509 15.2147 25.5821L15.2147 25.582C15.2783 25.3648 15.3378 25.1615 15.3953 24.9716C15.491 25.2601 15.5886 25.5801 15.6906 25.9252C15.7243 26.0391 15.7586 26.1565 15.7936 26.276L15.7939 26.2771L15.7939 26.2772C15.9809 26.9164 16.186 27.6179 16.4015 28.172C16.5285 28.4984 16.6983 28.8808 16.9288 29.2043C17.1271 29.4825 17.6196 30.0656 18.4378 30.0656C19.0145 30.0656 19.3908 29.7309 19.5485 29.5614C19.7195 29.3776 19.8307 29.1801 19.8976 29.0475C20.0358 28.7736 20.1447 28.45 20.2331 28.148C20.416 27.5234 20.5994 26.6781 20.7807 25.7275C21.1458 23.8124 21.5381 21.2734 21.9213 18.7733L21.9819 18.3777C22.0405 17.9952 22.0988 17.6143 22.1568 17.2371C22.3029 19.1671 22.4529 21.2927 22.6067 23.4721L22.6068 23.4726C22.6569 24.1819 22.7073 24.8969 22.7582 25.6127C23.0599 29.8588 23.3755 34.1325 23.7009 37.3475C23.863 38.949 24.0312 40.3259 24.2072 41.3167C24.2933 41.8015 24.3923 42.2587 24.5133 42.6199C24.5705 42.7907 24.6614 43.03 24.8074 43.2543C24.9062 43.4061 25.3175 44 26.0981 44C26.6479 44 27.0279 43.7018 27.2228 43.4952C27.4146 43.2918 27.535 43.0693 27.6075 42.9158C27.7557 42.6024 27.862 42.2326 27.9442 41.8894C28.1144 41.1793 28.2648 40.2185 28.404 39.1398C28.6468 37.258 28.8768 34.8387 29.1103 32.3831C29.1463 32.0051 29.1823 31.6263 29.2185 31.2484C29.4845 28.4688 29.7582 25.7404 30.0667 23.6741C30.1164 23.9189 30.1664 24.1726 30.2172 24.4334L30.2648 24.6783L30.2649 24.6784C30.4605 25.6848 30.6734 26.7802 30.9323 27.6371C31.0705 28.0941 31.2545 28.5993 31.5179 29.0174C31.7589 29.4 32.299 30.0656 33.2092 30.0656C33.8749 30.0656 34.382 29.727 34.7088 29.4155C35.0336 29.1059 35.2882 28.7239 35.4866 28.3757C35.8828 27.6801 36.2296 26.7993 36.5205 26.0429L36.6401 25.7308C36.7142 25.5373 36.785 25.3524 36.8533 25.177C36.8881 25.2859 36.9237 25.3985 36.9605 25.5146L36.9607 25.5154C37.0242 25.7157 37.091 25.9267 37.1624 26.1482C37.4245 26.9601 37.7504 27.9118 38.1697 28.6714C38.5316 29.3271 39.2872 30.4372 40.5948 30.4372C41.6067 30.4372 42.3881 29.8412 42.905 29.3417C43.3897 28.8735 43.8514 28.2775 44.2398 27.7762L44.347 27.638C44.7956 27.0606 45.1641 26.6046 45.5237 26.2848C45.8812 25.9668 46.0681 25.9317 46.141 25.9317C46.4568 25.9317 46.721 25.932 46.9798 25.9508ZM46.905 22.9424C46.648 22.9317 46.4008 22.9317 46.151 22.9317H46.141C45.1155 22.9317 44.2969 23.4597 43.7046 23.9866C43.1144 24.5115 42.5888 25.1819 42.1623 25.7308L42.0904 25.8235C41.6596 26.3782 41.3248 26.8093 40.9985 27.1246C40.8849 27.2344 40.7962 27.3059 40.7301 27.3525C40.697 27.3026 40.6577 27.2383 40.6124 27.1563C40.3539 26.6879 40.1066 26.0023 39.8402 25.1769C39.7864 25.0104 39.7312 24.8356 39.6747 24.657L39.6743 24.6558C39.4755 24.0269 39.2617 23.3507 39.0449 22.8175C38.9054 22.4743 38.7213 22.0769 38.475 21.7439C38.2548 21.4462 37.7519 20.888 36.9432 20.888C36.1923 20.888 35.693 21.3704 35.4562 21.6486C35.1933 21.9575 34.9856 22.3299 34.8235 22.6589C34.5415 23.2315 34.264 23.9576 34.0125 24.6157L34.0125 24.6158L34.0106 24.6207C33.973 24.7191 33.936 24.8161 33.8996 24.9107C33.7404 25.3249 33.5904 25.7047 33.4457 26.0391C33.3058 25.4541 33.1716 24.765 33.0251 24.0126L32.9888 23.8262C32.7775 22.7424 32.536 21.5257 32.2182 20.5779C32.0612 20.1096 31.8499 19.5937 31.5465 19.1692C31.2455 18.7482 30.6839 18.194 29.8321 18.194C28.9525 18.194 28.4783 18.8867 28.3256 19.138C28.1242 19.4695 27.9819 19.8609 27.8744 20.2172C27.6531 20.951 27.4658 21.932 27.2997 23.0171C26.9644 25.2072 26.6748 28.1035 26.4028 30.9456C26.3662 31.3279 26.3299 31.7092 26.2939 32.088L26.2933 32.0941C26.2544 32.5025 26.2159 32.908 26.1775 33.3085C25.9747 30.8657 25.7754 28.1323 25.5804 25.3873C25.5298 24.6764 25.4796 23.9647 25.4297 23.2574C25.1818 19.7459 24.9416 16.3421 24.7119 13.6761C24.5743 12.0782 24.438 10.7155 24.3029 9.74245C24.2365 9.26443 24.1638 8.83086 24.0802 8.49696C24.0412 8.3415 23.9806 8.12664 23.8832 7.92198C23.8364 7.82361 23.7434 7.64579 23.583 7.47288C23.4251 7.30268 23.0688 7 22.5288 7C21.8983 7 21.5129 7.40131 21.3819 7.55624C21.2251 7.74158 21.125 7.93697 21.0662 8.0638C20.9429 8.32974 20.8439 8.64532 20.7621 8.94374C20.5929 9.56101 20.4196 10.4002 20.2456 11.3491C19.915 13.1524 19.5532 15.5145 19.1917 17.8749L19.1277 18.2923C18.7987 20.4388 18.4715 22.5571 18.1638 24.2799C17.9886 23.7268 17.7882 23.1586 17.5574 22.6755C17.389 22.323 17.1621 21.9233 16.8521 21.594C16.5349 21.257 16.0251 20.888 15.3353 20.888C14.5993 20.888 14.0803 21.3114 13.7762 21.6765C13.4826 22.0289 13.2781 22.4515 13.13 22.8107C12.8913 23.3897 12.6772 24.1236 12.4858 24.7796L12.4858 24.7796C12.4423 24.9284 12.4001 25.0732 12.359 25.2112C12.1119 26.0415 11.8874 26.704 11.6383 27.1506C11.558 27.2947 11.4973 27.3781 11.4578 27.4243C11.3441 27.3951 11.148 27.3052 10.844 27.05C10.4417 26.7122 10.0252 26.2379 9.52075 25.651L9.4481 25.5664C8.99697 25.041 8.46446 24.4209 7.90669 23.9363C7.33018 23.4355 6.51353 22.8852 5.50604 22.8852C4.62262 22.8852 3.77386 23.1475 3.05182 23.4781C3.83348 12.0378 13.3613 3 25 3C36.4564 3 45.8676 11.7569 46.905 22.9424ZM49.9979 24.6757C49.8243 11.018 38.6989 0 25 0C11.1929 0 1.26431e-08 11.1929 1.26431e-08 25C1.26431e-08 25.3583 0.00753801 25.7149 0.0224641 26.0695C-0.0173018 26.3039 -0.0043989 26.5469 0.0621797 26.777C0.973571 39.7548 11.7903 50 25 50C38.8071 50 50 38.8071 50 25C50 24.9349 49.9997 24.8698 49.9993 24.8048C50.0006 24.7615 50.0001 24.7185 49.9979 24.6757ZM23.6063 9.38689C23.6086 9.3818 23.6082 9.38329 23.6048 9.39013L23.6063 9.38689ZM11.4037 27.4756C11.4037 27.4756 11.409 27.4699 11.42 27.464C11.4092 27.4736 11.4037 27.4756 11.4037 27.4756Z" fill="#3F3631"/>
</svg>

  <div className='txt'>Signal Catalogue
Updates Included</div>
</div>
<div className='item'>
  
<svg width="45" height="51" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6695 36.2242L31.0199 34.6464L29.3507 31.2471C30.8544 29.6886 31.8985 27.6265 32.2506 25.4756L32.4588 24.2051H34.2391C35.8574 24.2051 37.1739 22.8645 37.1739 21.2168V14.9414C37.1739 6.70271 30.5912 0 22.5 0C14.3881 0 7.82609 6.68349 7.82609 14.9414V21.2168C7.82609 22.5153 8.64401 23.6226 9.78261 24.0338V25.2012C9.78261 26.8489 11.0992 28.1895 12.7174 28.1895H13.5765C14.0006 29.1275 14.5495 29.9963 15.2174 30.7767C15.356 30.9389 15.5004 31.0961 15.6485 31.249L13.9801 34.6464L9.33036 36.2243C3.924 38.0599 0 43.8551 0 50.0039C0 50.5541 0.437967 51 0.978261 51H44.0217C44.5619 51 45 50.5541 45 50.0039C45 43.8551 41.0761 38.0599 35.6695 36.2242ZM35.2174 21.2168C35.2174 21.766 34.7785 22.2129 34.2391 22.2129H32.7461C32.9948 20.2516 33.1605 18.1645 33.2271 16.1088C33.2291 16.0509 33.2306 15.9945 33.2324 15.9375H35.2174V21.2168ZM10.7609 22.2129C10.2215 22.2129 9.78261 21.766 9.78261 21.2168V15.9375H11.7683C11.7715 16.0414 11.7749 16.1458 11.7787 16.2509C11.7788 16.2545 11.779 16.2579 11.7791 16.2615C11.7791 16.2618 11.7791 16.2621 11.7791 16.2624C11.8476 18.2618 12.0112 20.2947 12.2542 22.2128H10.7609V22.2129ZM12.7174 26.1973C12.178 26.1973 11.7391 25.7504 11.7391 25.2012V24.2051H12.5411L12.7493 25.476C12.789 25.7175 12.8378 25.9582 12.8943 26.1973H12.7174ZM11.7408 13.9453H9.81978C10.3153 7.26939 15.7869 1.99219 22.5 1.99219C29.1833 1.99219 34.679 7.2687 35.1801 13.9453H33.2593C33.1889 8.44419 28.7893 3.98438 23.3756 3.98438H21.6246C16.211 3.98438 11.8111 8.44419 11.7408 13.9453ZM21.6245 5.97656H23.3755C27.759 5.97656 31.3069 9.62735 31.3043 14.0858C31.3043 14.3992 31.3019 14.6722 31.2967 14.9205C31.2967 14.9237 31.2966 14.927 31.2966 14.9303L30.073 14.7522C26.7489 14.2689 23.6102 12.671 21.2352 10.2527C21.0517 10.0659 20.8029 9.96094 20.5435 9.96094C17.9163 9.96094 15.4013 11.1798 13.7389 13.2389C14.1486 9.18289 17.5161 5.97656 21.6245 5.97656ZM14.9224 26.1973C14.4327 24.5385 13.8723 19.6576 13.7485 16.5299L15.0651 14.7423C16.2743 13.1011 18.1556 12.0814 20.1569 11.9644C22.7901 14.516 26.1966 16.201 29.7964 16.7243L31.2366 16.9339C31.1403 19.0142 30.9436 21.1018 30.6617 23.0218C30.6616 23.0224 30.6615 23.0231 30.6614 23.0238C30.5718 23.6411 30.5012 24.0383 30.3208 25.1479C29.8027 28.312 27.484 31.1733 24.4232 31.9525C23.1635 32.2727 21.8363 32.2726 20.5773 31.9525C18.6661 31.466 16.9136 30.1195 15.7827 28.1895H17.777C18.1808 29.3488 19.2681 30.1816 20.5435 30.1816H22.5C24.1215 30.1816 25.4348 28.8445 25.4348 27.1934C25.4348 25.5456 24.1182 24.2051 22.5 24.2051H20.5435C19.2397 24.2051 18.1685 25.0625 17.7753 26.1973H14.9224ZM20.4612 33.9684C21.1322 34.1123 21.8163 34.1859 22.5 34.1859C23.0352 34.1859 23.5705 34.1403 24.0997 34.0519L22.3712 35.9133L20.4612 33.9684ZM21.0262 37.3614L17.9234 40.7025C17.0692 39.0376 16.3352 37.3049 15.7332 35.5311L16.8984 33.1582L21.0262 37.3614ZM27.9358 32.8207L29.2666 35.531C28.6636 37.3078 27.9294 39.0411 27.0761 40.704L23.7551 37.3224L27.9358 32.8207ZM19.5652 27.1934C19.5652 26.6434 20.0033 26.1973 20.5435 26.1973H22.5C23.0394 26.1973 23.4783 26.6441 23.4783 27.1934C23.4783 27.7434 23.0401 28.1895 22.5 28.1895H20.5435C20.0041 28.1895 19.5652 27.7426 19.5652 27.1934ZM1.99565 49.0078C2.38334 44.0733 5.60857 39.5881 9.94911 38.1142L14.067 36.7169C14.8214 38.8411 15.7561 40.9057 16.8514 42.8668C16.8533 42.8702 16.855 42.8736 16.8569 42.8769C16.8569 42.877 16.857 42.877 16.857 42.8771C17.6573 44.3103 18.5581 45.7109 19.5347 47.0406L20.7382 49.0078H1.99565ZM22.5 48.1199L21.1733 45.9511C21.1584 45.9268 21.1426 45.9032 21.1257 45.8803C20.3335 44.8043 19.5946 43.679 18.9215 42.5272L22.4103 38.7706L26.0864 42.5137C25.4089 43.6738 24.6673 44.8038 23.8745 45.8801C23.8265 45.9451 23.8945 45.8426 22.5 48.1199ZM24.2618 49.0078L25.4652 47.0407C26.4461 45.706 27.3533 44.2941 28.1617 42.844C28.1666 42.8352 28.1712 42.8263 28.1761 42.8175C28.1767 42.8164 28.1772 42.8154 28.1778 42.8143C29.2593 40.8719 30.1841 38.8252 30.933 36.7169L35.0508 38.1142C39.3914 39.5881 42.6167 44.0733 43.0043 49.0078H24.2618Z" fill="#3F3631"/>
</svg>

  <div className='txt'>Customer Support via E-mail, Phone, and Chat</div>
</div>
   </div>
    </div>
  )
}

export default Carousal
