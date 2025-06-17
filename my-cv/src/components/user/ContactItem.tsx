const ContactItem = ({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) => (
  <div>
    <i className={icon}></i> {children}
  </div>
);

export default ContactItem;
