// types
import { BenefitType, GalleryItemType, VacancyType } from './types'

// images
import img1 from '@/assets/images/photos/3.jpg'
import img2 from '@/assets/images/photos/4.jpg'
import img3 from '@/assets/images/photos/5.jpg'
import img4 from '@/assets/images/photos/10.jpg'

const benefits: BenefitType[] = [
  {
    icon: (
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Stockholm-icons / Map / Compass</title>
        <desc>Created with Sketch.</desc>
        <g id="Stockholm-icons-/-Map-/-Compass" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M14.1654881,7.35483745 L9.61055177,10.3622525 C9.47921741,10.4489666 9.39637436,10.592455 9.38694497,10.7495509 L9.05991526,16.197949 C9.04337012,16.4735952 9.25341309,16.7104632 9.52905936,16.7270083 C9.63705011,16.7334903 9.74423017,16.7047714 9.83451193,16.6451626 L14.3894482,13.6377475 C14.5207826,13.5510334 14.6036256,13.407545 14.613055,13.2504491 L14.9400847,7.80205104 C14.9566299,7.52640477 14.7465869,7.28953682 14.4709406,7.27299168 C14.3629499,7.26650974 14.2557698,7.29522855 14.1654881,7.35483745 Z"
            id="Combined-Shape"
            fill="#335EEA"
          />
        </g>
      </svg>
    ),
    title: 'Relocation Support',
    description: "We'll help to move and get settled and handle the visa process for you",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M5,2 L19,2 C20.1045695,2 21,2.8954305 21,4 L21,6 C21,7.1045695 20.1045695,8 19,8 L5,8 C3.8954305,8 3,7.1045695 3,6 L3,4 C3,2.8954305 3.8954305,2 5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L16,6 C16.5522847,6 17,5.55228475 17,5 C17,4.44771525 16.5522847,4 16,4 L11,4 Z M7,6 C7.55228475,6 8,5.55228475 8,5 C8,4.44771525 7.55228475,4 7,4 C6.44771525,4 6,4.44771525 6,5 C6,5.55228475 6.44771525,6 7,6 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M5,9 L19,9 C20.1045695,9 21,9.8954305 21,11 L21,13 C21,14.1045695 20.1045695,15 19,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,11 C3,9.8954305 3.8954305,9 5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L11,11 Z M7,13 C7.55228475,13 8,12.5522847 8,12 C8,11.4477153 7.55228475,11 7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z"
            id="Combined-Shape-Copy"
            fill="currentColor"
          />
          <path
            d="M5,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,18 C3,16.8954305 3.8954305,16 5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 L11,18 Z M7,20 C7.55228475,20 8,19.5522847 8,19 C8,18.4477153 7.55228475,18 7,18 C6.44771525,18 6,18.4477153 6,19 C6,19.5522847 6.44771525,20 7,20 Z"
            id="Combined-Shape-Copy-2"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Technology',
    description: 'A special training to get start with our technical stack by professionals',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z"
            id="C"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Growth budget',
    description: 'A specific budget for your professionals growth which you spend on throughout the year',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          <path
            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Team activities & retreats',
    description: "Many team building activities and retreat every quarter, so you don't get bored",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Work from anywhere',
    description: 'Work from anywhere you like. We offer remote working to all the employees',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M22,7 L22,9 L19,9 C18.4477153,9 18,9.44771525 18,10 L18,13 C18,13.5522847 18.4477153,14 19,14 L22,14 L22,16 L19,16 C17.3431458,16 16,14.6568542 16,13 L16,10 C16,8.34314575 17.3431458,7 19,7 L22,7 Z"
            id="Path-52"
            fill="currentColor"
            opacity="0.3"
            transform="translate(19.000000, 11.500000) scale(-1, 1) translate(-19.000000, -11.500000) "
          />
          <path
            d="M4.75777452,5 C5.56503586,3.79401426 6.93979195,3 8.5,3 C10.0602081,3 11.4349641,3.79401426 12.2422255,5 L4.75777452,5 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path d="M7,5 C7,2.790861 8.790861,1 11,1 C13.209139,1 15,2.790861 15,5 L7,5 Z" id="Combined-Shape" fill="currentColor" opacity="0.3" />
          <path
            d="M12.0500091,5 C12.2816442,3.85887984 13.290521,3 14.5,3 C15.709479,3 16.7183558,3.85887984 16.9499909,5 L12.0500091,5 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M8,8 L8,8 C8.55228475,8 9,8.44771525 9,9 L9,18 C9,18.5522847 8.55228475,19 8,19 L8,19 C7.44771525,19 7,18.5522847 7,18 L7,9 C7,8.44771525 7.44771525,8 8,8 Z M13,8 L13,8 C13.5522847,8 14,8.44771525 14,9 L14,18 C14,18.5522847 13.5522847,19 13,19 L13,19 C12.4477153,19 12,18.5522847 12,18 L12,9 C12,8.44771525 12.4477153,8 13,8 Z M4.06055214,5 L16.9394479,5 C17.4917326,5 17.9394479,5.44771525 17.9394479,6 C17.9394479,6.01958668 17.9388724,6.03916914 17.9377222,6.05872202 L17.1107386,20.117444 C17.0485547,21.1745693 16.1731425,22 15.1141898,22 L5.88581016,22 C4.82685754,22 3.95144525,21.1745693 3.88926141,20.117444 L3.06227777,6.05872202 C3.02984649,5.50739031 3.4504984,5.0341569 4.00183012,5.00172563 C4.021383,5.00057546 4.04096546,5 4.06055214,5 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Work/life balance',
    description: 'Flexible work hours gives you complete balance with your personal and professional life.',
  },
]

const gallery: GalleryItemType[] = [
  {
    id: 3,
    image: {
      src: img1,
      caption: 'Office Desks',
    },
  },
  {
    id: 4,
    image: {
      src: img2,
      caption: 'Meeting Room view',
    },
  },
  {
    id: 5,
    image: {
      src: img4,
      caption: 'Outside view',
    },
  },
  {
    id: 6,
    image: {
      src: img3,
      caption: 'A common seating area',
    },
  },
]

const vacancies: VacancyType[] = [
  {
    category: 'Engineering',
    jobs: [
      {
        designation: 'Techical Support Engineer',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Frontend)',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Backend)',
        type: 'Remote',
      },
      {
        designation: 'Engineering Manager',
        type: 'Remote',
      },
    ],
  },
  {
    category: 'Marketing',
    jobs: [
      {
        designation: 'Junior copywriter/editor',
        type: 'Remote',
      },
    ],
  },
]

export { benefits, gallery, vacancies }
