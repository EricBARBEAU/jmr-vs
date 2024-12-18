// import data from "./data/process_steps-data.json";

// function Step() {
//     return (

//     	<div className="process_step process_step-01">
//     		<img className="step_visual" src={step_01} alt="Step 01" />
//     		<div className="step_content">
//     			<div className="step_content-title">
//     				<span className="pill pill_red">step 01</span>
//     				<h3>Filling up your information service form</h3>
//     			</div>
//     			<div className="step_content-body">
//     				To be able to best evaluate your profile and visa 
//     				application chances, some information about yourself 
//     				will be collected.
//     			</div>
//     		</div>
//     	</div>
    	
//       <div id="ProjectsWrapper">
//         {data.map((item) => (
//           <article className={item.id}>
//               <div className="project-content">
//                 <span>{item.month}</span><b>{item.year}</b>
//                 <h2>{item.title}</h2>
//                 <p>{item.paragraph_01}</p>
//                 <p>{item.paragraph_02}</p>
//                 <a href={item.link} className="button" target="_blank" rel="noreferrer">Learn more</a>
//               </div>
//               <div className="project-visual" dangerouslySetInnerHTML={ { __html: item.video } }>
//               </div>
//           </article>
//         ))}
//       </div>
//     );
//   }

// export default Step;