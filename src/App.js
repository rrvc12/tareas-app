import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <h1>Manejador de Tareas</h1>
      </div>
      <div className='tareas-lista-principal'>
        <div className='tareas-titulo'>Mis tareas:</div>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
