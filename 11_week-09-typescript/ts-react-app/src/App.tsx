const App = () => {
  return (
    <div>
      <Todo title="Test 1" description="This is a test" />
    </div>
  );
};

interface TodoProps {
  id?: number;
  title: string; 
  description: string;
}

const Todo = ({ id, title, description }: TodoProps) => {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default App;
