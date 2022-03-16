import './Main.css';
import { useEffect, useState } from 'react'; //two functions imported from react, which we installed using npm i
import { fetchCountries } from '../services/countries'; //imports data from the countries table

export default function Main() {
  const [flags, setFlags] = useState([]);
  const [continents, setContinent] = useState('All');
  const continentoptions = [
    'All',
    'Africa',
    'North America',
    'South America',
    'Asia',
    'Oceania',
    'Europe',
    'Antarctica',
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const resp = await fetchCountries();
        console.log(resp);
        setFlags(resp);
        setLoading(false);
      } catch (e) {
        alert('something is wrong', e.message);
      }
    };
    console.log('use effect ran');
    console.log({ flags });
    fetchFlags();
  }, []);

  const filterFlags = () => {
    return flags.filter((flag) => flag.continent === continents || continents === 'All');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <header>
        <select onChange={(e) => setContinent(e.target.value)}>
          {continentoptions.map((cont) => (
            <option key={cont} value={cont}>
              {cont}
            </option>
          ))}
        </select>
      </header>
      <main>
        {filterFlags().map((flag) => (
          <div key={flag.iso2} className="country">
            {flag.name}
            <img
              src={`https://flagcdn.com/72x54/${flag.iso2.toLowerCase()}.png`}
              width="100"
              height="100"
              alt={flag.name}
            />
          </div>
        ))}
      </main>
    </>
  );
}
