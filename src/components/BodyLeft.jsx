import "./Body.css";

const BodyLeft = ({ education, language, hobbies, contact }) => {
  return (
    <div className="w-[350px] h-[750px] flex-col">
      <>
        <div>
          <h1 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg mb-6 dark:text-yellow-400">
            Education
          </h1>
          <p>
            {education.map((item, index) => (
              <li key={index} className="text-lg dark:text-white">
                {item}
              </li>
            ))}
          </p>
        </div>
      </>
      <>
        <div className="pt-6">
          <h2 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg mb-6 dark:text-yellow-400">
            Language
          </h2>
          <p>
            {language.map((item, index) => (
              <li key={index} className="text-center text-lg dark:text-white">
                {item}
              </li>
            ))}
          </p>
        </div>
      </>
      <>
        <div className="pt-6">
          <h2 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg mb-6 dark:text-yellow-400">
            Hobbies
          </h2>
          <p>
            {hobbies.map((item, index) => (
              <li key={index} className="text-center text-lg dark:text-white">
                {item}
              </li>
            ))}
          </p>
        </div>
      </>
      <div className="pt-6 ">
        <h2 className="h-[50px] flex justify-center items-center text-3xl text-center bg-slate-900 text-white rounded-lg mb-6 dark:text-yellow-400">
          Contact me
        </h2>
        <ul>
          {contact.map((contact, index) => (
            <li key={index} className="text-center text-lg dark:text-white">
              {Object.entries(contact).map(([key, value]) => (
                <p key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BodyLeft;
