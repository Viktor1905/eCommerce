import CountrySelector from './components/CountrySelector/CountrySelector';
import InputElement from './components/InputElement/InputElement';
import { registrationPageData } from './registration-page-data/registration-page-data';

export default function RegistrationPage() {
  return (
    <>
      <h2 className="text-3xl p-4 text-center ">Registration</h2>
      <form className="flex flex-col gap-3 p-4">
        {/** user info  */}
        <fieldset className="flex flex-row gap-6 p-4 flex-wrap">
          <legend className="text-2xl capitalize">
            {registrationPageData.userInfo.title}
          </legend>
          {registrationPageData.userInfo.content.map((property) => (
            <InputElement
              title={property.title}
              placeholder={property.placeholder}
              id={property.id}
              type={property.type}
              key={property.id}
            />
          ))}
        </fieldset>

        {/** user address  */}
        <fieldset className="flex flex-row gap-6 p-4 flex-wrap">
          <legend className="text-2xl capitalize">
            {registrationPageData.userAddress.title}
          </legend>
          {registrationPageData.userAddress.content.map((property) => (
            <InputElement
              title={property.title}
              placeholder={property.placeholder}
              id={property.id}
              type={property.type}
              key={property.id}
            />
          ))}
          <CountrySelector />
        </fieldset>

        {/** pet information  */}
        <fieldset className="flex flex-row gap-6 p-4 flex-wrap">
          <legend className="text-2xl capitalize">
            {registrationPageData.petInfo.title}
          </legend>
          {registrationPageData.petInfo.content.map((property) => (
            <InputElement
              title={property.title}
              placeholder={property.placeholder}
              id={property.id}
              type={property.type}
              key={property.id}
            />
          ))}
        </fieldset>

        {/** email and password  */}
        <fieldset className="flex flex-row gap-6 p-4 flex-wrap">
          <legend className="text-2xl capitalize">
            {registrationPageData.userLogin.title}
          </legend>
          {registrationPageData.userLogin.content.map((property) => (
            <InputElement
              title={property.title}
              placeholder={property.placeholder}
              id={property.id}
              type={property.type}
              key={property.id}
            />
          ))}
        </fieldset>
        <input type="submit" className="w-fit p-4" />
      </form>
    </>
  );
}
