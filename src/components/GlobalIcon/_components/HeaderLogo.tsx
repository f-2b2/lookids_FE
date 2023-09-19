import React from 'react';
import { IIconProps } from '../globalIconType';
/**
 *
 * @param {object} props
 * @param {'arrow-down'} props.name
 * @param {number} props.size
 * @param {string} props.color
 * @Reference https://oblador.github.io/react-native-vector-icons/
 * @returns
 */
const Component = ({ onClick }: IIconProps) => (
  <svg
    onClick={onClick}
    width="130"
    style={{
      cursor: 'pointer',
    }}
    height="30"
    viewBox="0 0 82 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.17472 3.09091V14H0.90554V3.09091H3.17472ZM8.68919 14.1598C7.86177 
      14.1598 7.14622 13.984 6.54252 13.6325C5.94238 13.2773 5.47896 12.7837 
      5.15225 12.1516C4.82555 11.516 4.6622 10.7791 4.6622 9.94105C4.6622 9.09588 
      4.82555 8.35724 5.15225 7.72514C5.47896 7.08949 5.94238 6.59588 6.54252 
      6.24432C7.14622 5.8892 7.86177 5.71165 8.68919 5.71165C9.5166 5.71165 10.2304 
      5.8892 10.8305 6.24432C11.4342 6.59588 11.8994 7.08949 12.2261 7.72514C12.5528 
      8.35724 12.7162 9.09588 12.7162 9.94105C12.7162 10.7791 12.5528 11.516 12.2261 
      12.1516C11.8994 12.7837 11.4342 13.2773 10.8305 13.6325C10.2304 13.984 9.5166 14.1598 
      8.68919 14.1598ZM8.69984 12.402C9.07626 12.402 9.39054 12.2955 9.64267 12.0824C9.8948 
      11.8658 10.0848 11.571 10.2126 11.1982C10.344 10.8253 10.4097 10.4009 10.4097 9.92507C10.4097 
      9.44922 10.344 9.02486 10.2126 8.65199C10.0848 8.27912 9.8948 7.98437 9.64267 7.76776C9.39054 
      7.55114 9.07626 7.44283 8.69984 7.44283C8.31987 7.44283 8.00027 7.55114 7.74103 7.76776C7.48535
      7.98437 7.29181 8.27912 7.16042 8.65199C7.03258 9.02486 6.96866 9.44922 6.96866 9.92507C6.96866 
      10.4009 7.03258 10.8253 7.16042 11.1982C7.29181 11.571 7.48535 11.8658 7.74103 12.0824C8.00027 
      12.2955 8.31987 12.402 8.69984 12.402ZM17.8884 14.1598C17.061 14.1598 16.3454 13.984 15.7417 
      13.6325C15.1416 13.2773 14.6782 12.7837 14.3515 12.1516C14.0248 11.516 13.8614 10.7791 13.8614 
      9.94105C13.8614 9.09588 14.0248 8.35724 14.3515 7.72514C14.6782 7.08949 15.1416 6.59588 15.7417 
      6.24432C16.3454 5.8892 17.061 5.71165 17.8884 5.71165C18.7158 5.71165 19.4296 5.8892 20.0297
       6.24432C20.6334 6.59588 21.0986 7.08949 21.4253 7.72514C21.752 8.35724 21.9154 9.09588 21.9154 
       9.94105C21.9154 10.7791 21.752 11.516 21.4253 12.1516C21.0986 12.7837 20.6334 13.2773 20.0297 
       13.6325C19.4296 13.984 18.7158 14.1598 17.8884 14.1598ZM17.8991 12.402C18.2755 12.402 18.5898 12.2955 
       18.8419 12.0824C19.094 11.8658 19.284 11.571 19.4118 11.1982C19.5432 10.8253 19.6089 10.4009 19.6089 
       9.92507C19.6089 9.44922 19.5432 9.02486 19.4118 8.65199C19.284 8.27912 19.094 7.98437 18.8419 7.76776C18.5898 
       7.55114 18.2755 7.44283 17.8991 7.44283C17.5191 7.44283 17.1995 7.55114 16.9403 7.76776C16.6846 7.98437 16.491 
       8.27912 16.3596 8.65199C16.2318 9.02486 16.1679 9.44922 16.1679 9.92507C16.1679 10.4009 16.2318 10.8253 16.3596 
       11.1982C16.491 11.571 16.6846 11.8658 16.9403 12.0824C17.1995 12.2955 17.5191 12.402 17.8991 12.402ZM25.447 
       11.6456L25.4523 8.92365H25.7826L28.4033 5.81818H31.0081L27.4871 9.9304H26.9491L25.447 11.6456ZM23.3909 
       14V3.09091H25.6601V14H23.3909ZM28.5045 14L26.0969 10.4364L27.6096 8.8331L31.1626 14H28.5045ZM32.1214 
       14V5.81818H34.3905V14H32.1214ZM33.2613 4.76349C32.9239 4.76349 32.6345 4.65163 32.393 4.42791C32.1551 
       4.20064 32.0361 3.92898 32.0361 3.61293C32.0361 3.30043 32.1551 3.03232 32.393 2.80859C32.6345 2.58132 
       32.9239 2.46768 33.2613 2.46768C33.5986 2.46768 33.8863 2.58132 34.1242 2.80859C34.3657 3.03232 34.4864 
       3.30043 34.4864 3.61293C34.4864 3.92898 34.3657 4.20064 34.1242 4.42791C33.8863 4.65163 33.5986 4.76349 
       33.2613 4.76349ZM39.2232 14.1332C38.6017 14.1332 38.0389 13.9734 37.5346 13.6538C37.0339 13.3306 36.6362 
       12.8565 36.3414 12.2315C36.0502 11.603 35.9047 10.8324 35.9047 9.91974C35.9047 8.98224 36.0556 8.20277 
       36.3574 7.58132C36.6593 6.95632 37.0605 6.48935 37.5613 6.1804C38.0655 5.8679 38.6177 5.71165 39.2179 
       5.71165C39.676 5.71165 40.0577 5.78977 40.3631 5.94602C40.6721 6.09872 40.9206 6.29048 41.1088 
       6.52131C41.3006 6.74858 41.4462 6.9723 41.5456 7.19247H41.6149V3.09091H43.8787V14H41.6415V12.6896H41.5456C41.4391 
       12.9169 41.2882 13.1424 41.0929 13.3661C40.9011 13.5863 40.6507 13.7692 40.3418 13.9148C40.0364 14.0604 39.6635 
       14.1332 39.2232 14.1332ZM39.9423 12.3274C40.3081 12.3274 40.617 12.228 40.8691 12.0291C41.1248 11.8267 41.3201 
       11.5444 41.4551 11.1822C41.5936 10.82 41.6628 10.3956 41.6628 9.90909C41.6628 9.42259 41.5953 9 41.4604 
       8.64133C41.3255 8.28267 41.1301 8.00568 40.8745 7.81037C40.6188 7.61506 40.3081 7.5174 39.9423 7.5174C39.5694 
       7.5174 39.2551 7.61861 38.9995 7.82102C38.7438 8.02344 38.5502 8.30398 38.4189 8.66264C38.2875 9.02131 38.2218 
       9.43679 38.2218 9.90909C38.2218 10.3849 38.2875 10.8058 38.4189 11.1715C38.5538 11.5337 38.7473 11.8178 38.9995 
       12.0238C39.2551 12.2262 39.5694 12.3274 39.9423 12.3274ZM52.5519 8.15128L50.4745 8.27912C50.439 8.10156 50.3627 
       7.94176 50.2455 7.79972C50.1283 7.65412 49.9738 7.53871 49.782 7.45348C49.5938 7.3647 49.3683 7.32031 49.1056 
       7.32031C48.754 7.32031 48.4575 7.39489 48.216 7.54403C47.9745 7.68963 47.8538 7.88494 47.8538 8.12997C47.8538 
       8.32528 47.9319 8.49041 48.0882 8.62536C48.2444 8.7603 48.5125 8.86861 48.8925 8.95028L50.3733 9.24858C51.1688 
       9.41193 51.7618 9.67472 52.1524 10.0369C52.5431 10.3991 52.7384 10.875 52.7384 11.4645C52.7384 12.0007 52.5803 
       12.4712 52.2643 12.8761C51.9518 13.2809 51.5221 13.5969 50.9752 13.8242C50.4319 14.0479 49.8051 14.1598 49.0949 
       14.1598C48.0118 14.1598 47.1489 13.9343 46.5061 13.4833C45.8669 13.0288 45.4923 12.4109 45.3822 11.6296L47.6141 
       11.5124C47.6816 11.8427 47.8449 12.0948 48.1041 12.2688C48.3634 12.4393 48.6954 12.5245 49.1002 12.5245C49.498 
       12.5245 49.8176 12.4482 50.059 12.2955C50.3041 12.1392 50.4284 11.9386 50.4319 11.6935C50.4284 11.4876 50.3414 
       11.3189 50.1709 11.1875C50.0004 11.0526 49.7377 10.9496 49.3825 10.8786L47.9656 10.5962C47.1666 10.4364 46.5718 
       10.1594 46.1812 9.76527C45.7941 9.37109 45.6006 8.86861 45.6006 8.25781C45.6006 7.73224 45.7426 7.27947 46.0267 
       6.8995C46.3144 6.51953 46.7174 6.22656 47.2359 6.0206C47.7579 5.81463 48.3687 5.71165 49.0683 5.71165C50.1017 
       5.71165 50.9149 5.93004 51.5079 6.36683C52.1045 6.80362 52.4525 7.39844 52.5519 8.15128Z"
      fill="black"
    />
    <circle cx="62.5" cy="2.5" r="2.5" fill="#D9D9D9" />
    <rect x="59" y="5" width="7" height="7" fill="#D9D9D9" />
    <rect x="60" y="12" width="2" height="5" fill="#D9D9D9" />
    <rect x="63" y="12" width="2" height="5" fill="#D9D9D9" />
    <rect
      width="2.47359"
      height="5.44418"
      transform="matrix(0.721442 0.692475 -0.678083 0.734985 68.2153 2.14258)"
      fill="#D9D9D9"
    />
    <rect
      width="2.47359"
      height="5.44418"
      transform="matrix(0.72144 -0.692477 0.678085 0.734983 55 3.85547)"
      fill="#D9D9D9"
    />
  </svg>
);
// const Component = ({size = 20, color, style}) => {
//   return (
//     <IconWrapper style={style}>
//       <ArrowLeftIcon size={size} color={color} />
//     </IconWrapper>
//   );
// };

export default Component;
