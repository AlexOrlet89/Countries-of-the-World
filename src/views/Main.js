import { useEffect, useState } from 'react'; //two functions imported from react, which we installed using npm i
import { getFlags } from '../services/flags'; //imports data from the countries table

export default function Main() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      const resp = await getFlags();
      console.log(resp);
      setFlags(resp);
    };
    console.log('use effect ran');
    console.log({ flags });
    fetchFlags();
  }, []);

  return (
    <main>
      {flags.map((flag) => (
        <p key={flag.iso2}>{flag.name}</p>
      ))}
    </main>
  );
}
