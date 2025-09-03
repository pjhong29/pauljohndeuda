import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NicheModeProvider } from './context/NicheModeContext';

createRoot(document.getElementById("root")!).render(
	<NicheModeProvider>
		<App />
	</NicheModeProvider>
);
