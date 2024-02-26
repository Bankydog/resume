import "./Body.css";

const BodyLeft = ({ education, language, hobbies, contact }) => {
  return (
    <div className="w-[548px] flex-col border-solid border-2 border-sky-500">
      <img src="./imgs/gmail.png" alt="" />
      <>
        <div>
          <h1 className="text-2xl text-center mb-2">Education</h1>
          <ul>
            {education.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </>
      <>
        <div className="pt-6">
          <h2 className="text-2xl text-center mb-2">Language</h2>
          <ul>
            {language.map((item, index) => (
              <li key={index} className="text-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </>
      <>
        <div className="pt-6">
          <h2 className="text-2xl text-center mb-2">Hobbies</h2>
          <ul>
            {hobbies.map((item, index) => (
              <li key={index} className="text-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </>
      <div className="pt-6 ">
        <h2 className="text-2xl text-center mb-2">Contact me</h2>
        <ul>
          {contact.map((contact, index) => (
            <li key={index} className="text-center">
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
