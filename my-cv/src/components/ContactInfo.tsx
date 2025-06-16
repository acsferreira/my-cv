import ContactItem from './ContactItem';
import ContactCol from './ContactCol';
import Section from './Section';
import { contactColumns } from '../utils/constants';

const ContactInfo = () => {
  return (
    <Section>
      <div className="contact-info">
        {contactColumns.map((col, idx) => (
          <ContactCol key={idx}>
            {col.map((item, i) => (
              <ContactItem icon={item.icon} key={i}>
                {item.content}
              </ContactItem>
            ))}
          </ContactCol>
        ))}
      </div>
    </Section>
  );
};

export default ContactInfo;
