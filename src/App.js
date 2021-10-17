import ContactList from './components/ContactList/ContactList';
import data from './data/data';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <div>
      <header>
        <div
          className="bg-pink-400 mx-auto p-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <h1 className="text-center font-semibold text-xl">
            Contact List - DEVinHouse
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
          {data.map((item) => (
            <ContactList
              key={item.id}
              image={item.image}
              status={item.status}
              name={item.name}
              bio={item.bio}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
