import ContactItem from './ContactItem';
import ContactCol from './ContactCol';
import Section from '../common/Section';
import { icons } from '../../utils/constants';

import { calculateAge } from '../../utils/user';
import { useAppSelector } from '../../utils/hooks/redux';

const ContactInfo: React.FC = () => {
  const {
    location,
    nationality,
    phone,
    email,
    birthday,
    maritalStatus,
    linkedin,
    github,
  } = useAppSelector(state => state.user);

  const user = {
    location,
    nationality,
    phone,
    email,
    birthday,
    maritalStatus,
    linkedin,
    github,
  };

  const entries = Object.entries(user).map(([key, value]) => ({
    icon: icons[key] || icons.notFound,
    content: key === 'birthday' ? calculateAge(value) : value,
    key,
  }));

  const contactColumns = [];
  for (let i = 0; i < entries.length; i += 2) {
    contactColumns.push(entries.slice(i, i + 2));
  }

  return (
    <Section>
      <div className="contact-info">
        {contactColumns.map((col, idx) => (
          <ContactCol key={idx}>
            {col.map((item, i) => (
              <ContactItem icon={item.icon} key={i}>
                {['linkedin', 'github'].includes(item.key) ? (
                  <a
                    href={String(item.content)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {String(item.key)}
                  </a>
                ) : (
                  <span>{String(item.content)}</span>
                )}
              </ContactItem>
            ))}
          </ContactCol>
        ))}
      </div>
    </Section>
  );
};

export default ContactInfo;
