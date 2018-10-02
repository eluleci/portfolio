import avatar from './images/emrullah-luleci.jpg';
import mentornitylogo from './images/mentornity-logo.png';
import mentornityAdmin1 from './images/mentornity-admin-1.png';
import mentornityAdmin2 from './images/mentornity-admin-2.png';
import mentornityAdmin3 from './images/mentornity-admin-3.png';
import mentornityAdmin4 from './images/mentornity-admin-4.png';
import mentornityClient1 from './images/mentornity-client-1.png';
import mentornityClient2 from './images/mentornity-client-2.png';
import mentornityClient3 from './images/mentornity-client-3.png';
import mentornityClient4 from './images/mentornity-client-4.png';
import mentornityMobile1 from './images/mentornity-mobile-1.png';
import mentornityMobile2 from './images/mentornity-mobile-2.png';
import mentornityMobile3 from './images/mentornity-mobile-3.png';
import ingLogo from './images/ing-logo.png';
import ing1 from './images/ing-1.png';
import ing2 from './images/ing-2.png';
import ing3 from './images/ing-3.png';
import anadoluLogo from './images/anadolu-logo.png';
import anadolu1 from './images/anadolu-1.jpg';
import anadolu2 from './images/anadolu-2.jpg';
import anadolu3 from './images/anadolu-3.jpg';
import biddyLogo from './images/biddy-logo.png';
import biddy1 from './images/biddy-1.png';
import biddy2 from './images/biddy-2.png';
import biddy3 from './images/biddy-3.png';
import miwiLogo from './images/miwi-logo.jpg';
import miwi1 from './images/miwi-1.png';
import miwi2 from './images/miwi-2.png';
import miwi3 from './images/miwi-3.png';
import indirimLogo from './images/indirim-logo.png';
import indirim1 from './images/indirim-1.png';
import indirim2 from './images/indirim-2.png';
import indirim3 from './images/indirim-3.png';
import movieTrendsLogo from './images/movie-trends-logo.png';
import movieTrends1 from './images/movie-trends-1.jpg';
import movieTrends2 from './images/movie-trends-2.jpg';
import movieTrends3 from './images/movie-trends-3.jpg';
import caricatureLifeLogo from './images/caricature-life-logo.png';
import caricatureLife1 from './images/caricature-life-1.png';
import caricatureLife2 from './images/caricature-life-2.png';
import caricatureLife3 from './images/caricature-life-3.png';
import predictLogo from './images/predict-logo.png';
import predict1 from './images/predict-1.png';
import predict2 from './images/predict-2.png';
import predict3 from './images/predict-3.png';
import footMarkersLogo from './images/footmarkers-logo.png';
import footMarkers1 from './images/footmarkers-1.jpg';
import footMarkers2 from './images/footmarkers-2.jpg';
import footMarkers3 from './images/footmarkers-3.jpg';
import elasticCatchLogo from './images/elastic-catch-logo.png';
import elasticCatch1 from './images/elastic-catch-1.png';
import elasticCatch2 from './images/elastic-catch-2.png';
import elasticCatch3 from './images/elastic-catch-3.png';

export default [
  {
    title: 'Mentornity - Web Site',
    description: `
    This project is a web interface for mentors and mentees using Mentornity platform.
    <br/>
    Mentornity is a powerful communication and managing system for mentoring and coaching programs. 
    <br />
    <br />
    Mentornity makes experince sharing very efficient in Companies, Incubators, Accelerators, Alumni networks, Universities and Organisations.
    <br />
    <br />
    Useful features are ready in seconds : Messaging, Matching, API Support, White Labelling, Scheduling, Program Content Design, Feedbacks, Meeting Notes, Tracking, Reporting and more!.
  `,
    url: 'https://mentornity.com',
    image: mentornitylogo,
    role: `
      I am the partner of Mentornity platform and creator of this project. 
      Mentornity platform is created in 2016 and this project started in 
      2017 after we decided to split the administration and mentor/mentee web applications. 
      I have created all the infrastructure from scratch including the user interface, data storage and 
      manipulation system and network interface.
      <br /> 
      <br />
      After the initial release, I continued to add new features, fix bugs and maintain the project. Recently new members joined the 
      project so I started to lead them. I am responsible of assigning the tasks, validating the features they work on.
    `,
    screens: [mentornityClient1, mentornityClient2, mentornityClient3, mentornityClient4],
    screensDescription: '"DHL UK Mentoring" is a demo organisation created for DHL UK for testing purposes.',
    layout: 'cell'
  },
  {
    title: 'Mentornity Admin Panel - Web Site',
    description: `
    Mentornity Admin Panel is a collaborative tool for admins of the organisation in Mentornity platform. 
    Admins can:
     
     <ul>
       <li>invite mentors and mentees</li>
       <li>create meetings for users</li>
       <li>add available time for mentors</li>
       <li>pair the mentors and mentees for letting them know each other in the system</li>
       <li>send message to users</li>
       <li>send announcements to users</li>
     </ul>
  `,
    url: 'https://admin.mentornity.com',
    image: mentornitylogo,
    role: `
    I am the partner of Mentornity platform and creator of this project. I created this project in 2016. At first it was
    serving to mentors/mentees and organisation administrations. In 2017, we decided to split the mentor/mentee web
    application. Currently this project is being used only by organisation admins and the user interface is customized
    especially for administration based features.
    <br/>
    <br/>
    I created all the techincal background and web application. Additionally, I created the continuous integration 
    system for building, deploying development environment and deploying the app to production.
  `,
    screens: [mentornityAdmin1, mentornityAdmin2, mentornityAdmin3, mentornityAdmin4],
    screensDescription: '"DHL UK Mentoring" is a demo organisation created for DHL UK for testing purposes.',
    layout: 'cell'
  },
  {
    title: 'Mentornity Mobile - iOS and Android App',
    description: `
      Mentornity mobile is an application where the mentors and mentees can:
      <ul>
        <li>Join to the system</li>
        <li>Create mentorship</li>
        <li>Explore mentors based on the profession and skill</li>
        <li>Send contact request</li>
        <li>Send messages</li>
        <li>Have mentoring session online</li>
      </ul>
    `,
    image: mentornitylogo,
    role: `
      I have created the Android and iOS application of Mentornity Mobile as a free lancer in 2015.
      I started the project from scratch and was the only developer. After six months, the project pivoted into
      a web site and the mobile applications are revoked from the stores.
    `,
    screens: [mentornityMobile1, mentornityMobile2, mentornityMobile3],
  },
  {
    title: 'Emrullah Lüleci',
    description: `Senior Android and Web Developer`,
    url: 'https://eluleci.github.io',
    image: avatar,
    layout: 'person'
  },
  {
    title: 'ING Bank - Android App',
    description: `
      Through ING Mobile application, transactions like money transfers, tax payments, bill payments and FX buy/sell can be done easily.
      <br/>
      <br/>
      Corporate customers can see approve transactions through push notifications
      <br/>
      <br/>
      ING Mobile Retail includes:
      - Account Transactions
      - Money Transfers
      - Credit Card Transactions
      - Payments (Bill Payments / Mobile Top-Up / Fundation Payments / Loan Payments)
      - Investment Transactions (FX Buy/Sell, Repo and Fund Transactions)
      - Orange Assistant
      - Applications (Loan / Credit Card / e-Orange Account / Insurance / Overdraft / Findeks Risk Report)
    `,
    url: 'https://play.google.com/store/apps/details?id=com.ingbanktr.ingmobil',
    image: ingLogo,
    role: `
      I joined to an existing Android team. The application was half done when I had joined. After I joined, 
      I implemented new features and fixed existing bugs. Few months after I joined, the application is released.
      After the release I kept maintaining the application. 
      <br/>
      <br/>
      My biggest accomplishment in this application was creating an Android framework that helped implementing forms 
      which reduced the amount of time for the implementation of the new pages and reduced the bugs in general. 
    `,
    screens: [ing1, ing2, ing3],
  },
  {
    title: 'Anadolu Üniversitesi - iOS and Android App',
    description: `
      Anadolu University mobile app is the official application of the Anadolu University for students and professors.
      With Anadolu Mobile students can:
      <ul>
        <li>See their courses</li>
        <li>View their exams</li>
        <li>View their exam results</li>
        <li>Follow the university announcements</li>
        <li>Book ticket from the main restaurant</li>
      </ul>
    `,
    image: anadoluLogo,
    role: `
      I joined to the mobile team of BAUM (Computer Research and Application Center) of the Anadolu University and
      we started a new Android application after I join. I was responsible of implementing the UI which was 
      inspired by Microsoft's metro design. I had to implement almost all of the UI elements of the application
      because of the different design concept.  
    `,
    screens: [anadolu1, anadolu2, anadolu3],
    url: 'https://play.google.com/store/apps/details?id=edu.anadolu.mobil.tetra&hl=en',
  },
  {
    title: 'Miwi - iOS and Android App',
    description: `
      With MIWI you’re connected with people who care. Share your thoughts with other change-makers 
      and explore their ideas for making the world a better place.
      <br/>
      <br/>
      With MIWI, users can:
      <ul>
        <li>Explore the content based on a topic</li>    
        <li>Find like minded people</li>    
        <li>Have conversations about common topics</li>    
        <li>Share posts</li>    
      </ul>
    `,
    image: miwiLogo,
    role: `
      I joined an existing tech team in Amsterdam as the first Android developer. The web site, iOS application and backend 
      was already being built. I started the Android project from scratch and implemented features. After we had the 
      first demo, we fixed the bugs and made some changes based on the feedback of the test users.
    `,
    screens: [miwi1, miwi2, miwi3],
  },
  {
    title: 'Biddy - iOS App',
    description: `
      Biddy is the first video marketplace and the most fun way to discover, 
      buy and sell your clothing, shoes and accessories.
      <br/>
      <br/>
      The Fashion industry is the second-most polluting industry in the world. Biddy is aa product that helps to 
      give clothes a second life and which decreases the unnecessary consumption of the natural resources. 
    `,
    image: biddyLogo,
    role: `
      I have worked in this project as iOS and backend developer. We started the project together with 
      the Miwi team in Amsterdam after cancelling the main project of Miwi. I left the Miwi before the project was over.
    `,
    screens: [biddy1, biddy2, biddy3],
  },
  {
    title: 'İndirim - iOS and Android App',
    description: `
      Sale is the first application that brings all the sales of the brands you like.
      <br /> 
      <br /> 
      You can also receive notifications of the brands by selecting them and you will to be notified when 
      there is a new sale. Only available in Turkey.
    `,
    image: indirimLogo,
    role: `
      This project is created in 2014. I was co-founder of this project. I developed the backend api and the 
      Android application where the iOS application was created by the other co-founder. This was a side project
      for both of the founders.
      <br />
      <br />
      After the release, the application got quick attention but because of the difficulty about the 
      content generation and marketing, the product is revoked from the Google Play Store and Apple App Store.
    `,
    screens: [indirim1, indirim2, indirim3],
  },
  {
    title: 'Elastic Catch - iOS and Android App',
    description: `
      Catch the green balls by stretching the blue ball and stay away from the red ones!!!

      Elastic Catch is ideally really simple game but you'll be surprised when you see how tricky and funny it is.
      Controlling two fingers at the same time and balancing them for not touching the red balls is the hardest part.
      However you'll really enjoy once you get used to it and increase your score. As you play the game becomes faster 
      and you'll especially enjoy after that moment.
    `,
    url: 'https://play.google.com/store/apps/details?id=com.cengalabs.elasticcatch',
    image: elasticCatchLogo,
    role: `
      I created the Elastic Catch as a side project on 2015. I am the only developer, designer of the project.
      After releasing the project it got attention quickly. The application is still on Google Play Store.
    `,
    screens: [elasticCatch1, elasticCatch2, elasticCatch3],
  },
  // {
  //   title: 'Movie Trends - Android App',
  //   description: `
  //     Movie Trends is a social application that eases finding a movie worth watching. Open up the app and discover the movies that you may like. Movie Trends lets you reach thousands of movies and actors with a few tap.
  //     <br/>
  //     <br/>
  //     With Movie Trends you can:
  //     <ul>
  //     <li>check all the movies you've watched</li>
  //     <li>create your own watch list</li>
  //     <li>select your favorite movies</li>
  //     </ul>
  //   `,
  //   image: movieTrendsLogo,
  //   role: `
  //     I am one of the 2 co-founders of this project. I worked on the Android application while the other co-founder
  //     created the backend api. All the user interface and user experience designs were done by me as well.
  //     The biggest difficulty we had was growing our user number. Because of that reason we revoked the application
  //     from stores after few years.
  //   `,
  //   screens: [movieTrends1, movieTrends2, movieTrends3],
  // },
  // {
  //   title: 'Predict - Android App',
  //   description: `
  //     PreDict is a dictionary application with many features. With PreDict you can;
  //     <ul>
  //     <li>find translations in eight languages</li>
  //     <li>search in multiple languages at the same time</li>
  //     <li>save the words you want to keep</li>
  //     <li>memorize them even while you are walking or riding bike.</li>
  //     </ul>
  //
  //     PreDict has really simple and useful interface. You will love it while using.
  //   `,
  //   image: predictLogo,
  //   role: `
  //     I created this project while I was living in Leipzig/Germany in 2013 for finding and memorizing the German words.
  //     I designed user interface and user experience and created the Android application. During my file in Germany, this
  //     application helped me a lot but I couldn't market the application myself. I canceled the project because I couldn't
  //     spend more time on it.
  //   `,
  //   screens: [predict1, predict2, predict3],
  // },
  {
    title: 'Caricature Life - Android App',
    description: `
      Caricature life is an easy way of having fun by creating caricatures of yourself or your friends.
      You can select pictures, select the eye, nose and mouth effects and create your caricature in seconds.
      It doesn't require network, everything happens right inside your phone.
    `,
    url: 'https://play.google.com/store/apps/details?id=com.caricaturelife',
    image: caricatureLifeLogo,
    role: `
      This project is created in 2013. I was part of a team consisting 4 people in total. I worked as an
      Android developer and I was responsible of developing the UI and the algorithm that generates the caricatures.
      <br />
      <br />
      After the initial release, the product didn't get the expected attention and it is removed from the
      Google Play Store.
    `,
    screens: [caricatureLife1, caricatureLife2, caricatureLife3],
  },
  // {
  //   title: 'Footmarkers - Android App',
  //   description: `
  //     Footmarkers helps you discover new places around you.
  //     This application suggests you the popular places that you may like.
  //     Also you can check the places that you've visited and add any place to your visit list.
  //     Footmarkers let you add new places you want to suggest to other users and comment on any place.
  //     You can follow your friends from other social places and can see their visit list.
  //   `,
  //   image: footMarkersLogo,
  //   role: `
  //     This project is created in 2012. I was responsible of the development of the mobile web site and
  //     the mobile application. The application didn't get the desired attention and it is removed after
  //     its first year.
  //   `,
  //   screens: [footMarkers1, footMarkers2, footMarkers3],
  // },
]