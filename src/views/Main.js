import { useEffect, useState } from 'react';
import { getFlags } from '../services/flags';

export default function Main() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const resp = await getFlags();
      setFlags(resp);
    };
    console.log('use effect ran');
  });

  return <div className="App"></div>;
}
