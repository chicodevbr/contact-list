import StatusIcon from './StatusIcon';
import StatusOfflineIcon from './StatusOfflineIcon';

const ContactList = (props) => {
  const online = 'h-5 w-5 text-green-600';
  const missing = 'h-5 w-5 text-yellow-600';
  const busy = 'h-5 w-5 text-red-600';
  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
    flex flex-col items-center justify-center`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <img className={`w-24 rounded-full`} src={props.image} alt={props.name} />
      {props.status === 'offline' && <StatusOfflineIcon />}
      {props.status === 'online' && <StatusIcon className={online} />}
      {props.status === 'busy' && <StatusIcon className={busy} />}
      {props.status === 'missing' && <StatusIcon className={missing} />}

      <h2 className={`font-semibold text-x`}>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
};

export default ContactList;
