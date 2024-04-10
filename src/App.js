import logo from './logo.svg';
import logo_noir from './logo_noir.svg';
import { useState } from 'react';

function App() {
  // 2 états avec useState : passwordVisible (visible ou hidden) et password (valeur saisie par l'user).
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  // Fonction rendre visible le mot de passe.
  const passwordHidden = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Fonction pour gérer les changements dans le champ de saisie du mot de passe.
  const ChangePassword = (event) => {
    setPassword(event.target.value);  // Met à jour la valeur du mot de passe avec la valeur saisie par l'utilisateur.
  };

  return (

    <div className="App">

      {/* Header */}
      <header className="flex justify-start items-center py-2 px-2">
        <a href='index.html' className='pl-10'><img src={logo} className="h-20" alt="Logo" /></a>
      </header>


      {/* Main */}
      <div className="flex flex-col items-center justify-center h-full">

        <div className="relative">


          {/* Div Connexion */}
          <div className="bg-white p-6 rounded-lg shadow-xl mx-auto max-w-sm">

            <h1 className="text-4xl font-semibold mb-2">S'identifier</h1>
            <p className="text-gray-700 mb-6">Tenez-vous au courant des évolutions de votre monde professionnel</p>

            <form>
              <input type="email" placeholder="E-mail ou téléphone" className="w-full border border-gray-800 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-700" />
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Mot de passe" 
                value={password} 
                onChange={ChangePassword}
                className="w-full border border-gray-800 rounded-md py-2 px-3 mb-1 focus:outline-none focus:border-blue-700"
              />
              <button type="button" onClick={passwordHidden} className='text-gray-500 mb-2'>
                {passwordVisible ? "Masquer" : "Afficher"} le mot de passe
              </button>
              <a href="index.html" className="font-medium text-lg text-blue-700 hover:text-blue-900 cursor-pointer text-sm mb-4 block">Mot de passe oublié ?</a>
              <button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white rounded-3xl py-3 px-4 w-full mb-6">S'identifier</button>
            </form>

            <hr></hr>

            <p className="text-gray-700 text-sm mt-4">En cliquant sur Continuer, vous acceptez 
            les <a href="https://fr.linkedin.com/legal/user-agreement" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 cursor-pointer">Conditions d’utilisation </a>
            , la <a href="https://fr.linkedin.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 cursor-pointer">Politique de confidentialité</a> et
             la <a href="https://fr.linkedin.com/legal/cookie-policy" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 cursor-pointer">Politique relative aux cookies</a> de LinkedIn.</p>
          
          </div>

        </div>


        {/* Div Inscription */}
        <div className="pt-8 mb-3">
          <p className="text-gray-800 mb-6">Vous débutez sur LinkedIn ? <a href='https://www.linkedin.com/signup/cold-join' className='text-blue-700' rel="noreferrer">S'inscrire</a></p>
        </div>

      </div>
      

        {/* Footer */}
        <footer className="text-gray-800 pb-1 px-20">

          <div className="flex justify-between items-center text-gray-500">

            <div className="flex items-center mr-12">
              <img src={logo_noir} className="h-4 mr-1" alt="Logo"/> © 2024
            </div>

            <ul className="flex flex-wrap">
              <li className="mr-4 mb-2"><a href="https://fr.linkedin.com/legal/user-agreement?trk=d_checkpoint_lg_consumerLogin_ft_user_agreement" target="_blank" rel="noreferrer" className="hover:text-blue-400">Conditions générales d’utilisation</a></li>
              <li className="mr-4 mb-2"><a href="https://fr.linkedin.com/legal/privacy-policy?trk=d_checkpoint_lg_consumerLogin_ft_privacy_policy" target="_blank" rel="noreferrer" className="hover:text-blue-400">Politique de confidentialité</a></li>
              <li className="mr-4 mb-2"><a href="https://www.linkedin.com/help/linkedin/answer/a403269/?lang=en" target="_blank" rel="noreferrer" className="hover:text-blue-400">Directives de la communauté</a></li>
              <li className="mr-4 mb-2"><a href="https://www.linkedin.com/legal/cookie-policy?trk=d_checkpoint_lg_consumerLogin_ft_cookie_policy" target="_blank" rel="noreferrer" className="hover:text-blue-400">Politique relative aux cookies</a></li>
              <li className="mr-4 mb-2"><a href="https://www.linkedin.com/legal/copyright-policy?trk=d_checkpoint_lg_consumerLogin_ft_copyright_policy" target="_blank" rel="noreferrer" className="hover:text-blue-400">Politique de copyright</a></li>
              <li className="flex items-center mb-2">Langue
                  <svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="ml-1 mt-1">
                      <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z" fill="currentColor"></path>
                  </svg>
              </li>
            </ul>

          </div>
          
        </footer>



    </div>

  );
}

export default App;