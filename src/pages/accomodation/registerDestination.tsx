import { ImLocation } from 'react-icons/im';

import RequiredMark from '@/components/requiredMark';

const RegisterDestination = ({ page, setPage }) => {
  // const [accomodationState, setAccomodationState] = useState({
  //   destination_name: '',
  //   address: '',
  //   contact: '',
  //   description: '',
  //   url: '',
  // });
  return (
    <div className="create-accomodation">
      <form className="create-accomodation__form">
        <h1 className="form-header">Register Destination</h1>
        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="dest-name"
          >
            Destination name
            <RequiredMark />
          </label>
          <input
            type="text"
            name="destination_name"
            placeholder="Provide your destination"
            id="dest-name"
            className="create-accomodation__form__group--input"
          />
        </div>

        <div className="create-accomodation__form--double-group">
          <div className="create-accomodation__form__group location">
            <label
              className="create-accomodation__form__group--label"
              htmlFor="address"
            >
              Address
              <RequiredMark />
            </label>
            <input
              type="text"
              name="address"
              placeholder="Provide the address"
              id="address"
              className="create-accomodation__form__group--input"
            />
            <ImLocation className="create-accomodation__form__group--icon" />
          </div>

          <div className="create-accomodation__form__group">
            <label
              className="create-accomodation__form__group--label"
              htmlFor="contact"
            >
              Contact
              <RequiredMark />
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Provide your Email or Phone number"
              id="contact"
              className="create-accomodation__form__group--input"
            />
          </div>
        </div>
        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="description"
          >
            Description
            <RequiredMark />
          </label>
          <textarea
            name="description"
            rows="3"
            id="description"
            placeholder="Provide a small description of the accomodation facility"
            className="create-accomodation__form__group--input description"
          ></textarea>
        </div>

        <div className="create-accomodation__form__group">
          <label
            className="create-accomodation__form__group--label"
            htmlFor="dest-url"
          >
            Url
          </label>
          <input
            type="text"
            name="url"
            placeholder="Provide a url to your website or info"
            id="dest-url"
            className="create-accomodation__form__group--input"
          />
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className="create-accomodation__form--next-btn"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterDestination;
