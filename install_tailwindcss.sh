#installation de tailwindcss
npm install tailwindcss @tailwindcss/vite && echo "Tailwindcss installer avec succés !"

#install du plugin tailwindcss daisyui  pour les composent
npm i -D daisyui@latest && echo "daisyui installer avec succés !"

#installation d'icon
npm install lucide-react && echo "lucide-react installer avec succés !"


#configuration de tailwindcss
echo "import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
	plugins: [
		react(),
		tailwindcss()
	],
})" > vite.config.js && echo "Tailwindcss configurer !"

# importation de tailwindcss dans le projet
echo '@import "tailwindcss";
@plugin "daisyui" {
	themes : night
};' > src/index.css && echo "Tailwindcss et daisyui sont prêts a employés !"

#applique le theme : dans index.html <html lang="n" data-theme="night">

