import React from 'react';

const Intro: React.FC = () => {
  return (
    <div>
      <div className='intro'>
        <div className='main-img'>
          <img className='intro_img' src='https://s3-alpha-sig.figma.com/img/ab87/47b2/fb703f485496ca1a73db84779ccb6a3b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXSKBlSphpDL5LsubNN~CKuliTn31q9Cx-SP7MgVpPaBhMHUDHrvZVSxgh-5evm9FrnBf6SjHfG3wU57ZlDhUCzBCLRREkO8nm8nZ3DecLYnCBlmcA51ukNPF1iKASis6qvD7-KKIYe29DhRM-sOxCBB3fDbLE92OAM5AFJXT2dUIaSqcP3I83O0P1tGjPVKELI~BxTh4hbC4kP0RpsWvu9mVMQz0~vEFPZZY8N1tYJscBLQO8uv40QVKEJQSfxqv-BId8oyIMQ~Ic7QusoPJvs1ZQORlPiQ6n-gQ~P~Bw1bLLx5w5WwE0sm2694Xs3~W5qlNtU1vnxKF11dC~OQ1w__' alt='Main Image' />
        </div>
        <div className='intro_details'>
          <h2>TECH SERVICES</h2>
          <h1>TechSynergy:</h1>
          <h1>Innovate,</h1>
          <h1>Create,<span> Elevate</span></h1>
          <p>Unlocking Possibilities, One Code at a Time</p>
          <div className='projects-btn'>
            <p>See Projects</p>
          </div>
        </div>
      </div>
      <div className='intro_2'>
        <p>We have multidisciplinary teams to meet any <span>challenge</span></p>
      </div>
      <div className='card-container'>
        <div className="card">
          <div className="card-details-1">
            <i className="fa-solid fa-computer"></i>
            <p className="text-title">Front-End</p>
            <p className="text-body">Our frontend developers understand the delicate balance between aesthetics and functionality. </p>
          </div>

          <div className="card-details-1">
            <i className="fa-solid fa-code"></i>
            <p className="text-title">Back-end</p>
            <p className="text-body">Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.</p>
          </div>

          <div className="card-details-1">
            <i className="fa-regular fa-hard-drive"></i>
            <p className="text-title">Data Analysts</p>
            <p className="text-body">Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts. </p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
      <div className='middle'>
        <p className='design'></p>
        <div className='middle-info'>
          <p>Empowering Your Digital Vision: Our Comprehensive Tech Services.</p>
        </div>
      </div>


      <div className='multi-card-container'>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-code"></i>
            <p className="text-title">Custom Software Development</p>
            <p className="text-body">Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
          </div>
        </div>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-sliders"></i>
            <p className="text-title">QA and Testing</p>
            <p className="text-body">Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
          </div>
        </div>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-diagram-project"></i>
            <p className="text-title">AI and Data Science</p>
            <p className="text-body">Use leading AI, machine learning, and data engineering technologies to unlock business value.</p>
          </div>
        </div>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-paintbrush"></i>
            <p className="text-title">UX/UI Design</p>
            <p className="text-body">Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.</p>
          </div>
        </div>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-mobile-screen"></i>
            <p className="text-title">Mobile App Development</p>
            <p className="text-body">Build performant, scalable, and secure mobile applications for iOS and Android devices.</p>
          </div>
        </div>
        <div className='multi-card'>
          <div className="multi-details-1">
            <i className="fa-solid fa-shapes"></i>
            <p className="text-title">Platform and Infrastructure</p>
            <p className="text-body">Ensure applications are secure, fault-tolerant, and highly available with our DevOps and Security engineers. </p>
          </div>
        </div>
        <p className='design2'></p>
        <p className='design3'></p>
      </div>
    </div>
  );
}

export default Intro;
