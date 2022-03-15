import { useEffect, useState } from 'react'; //two functions imported from react, which we installed using npm i
import { fetchCountries } from '../services/countries'; //imports data from the countries table

export default function Main() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const resp = await fetchCountries();
        console.log(resp);
        setFlags(resp);
      } catch (e) {
        alert('something is wrong', e.message);
      }
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
