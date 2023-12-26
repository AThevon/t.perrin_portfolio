interface EmailTemplateProps {
   name: string;
   mail: string;
   message: string;
}

export const EmailTemplate = ({ name, mail, message }: EmailTemplateProps) => (
   <div>
      <h1>Bonne nouvelle !</h1>
      <p>
         Vous avez reçu un nouveau message de la part de {name} sur votre
         portfolio !
      </p>
      <p>Son adresse mail est : {mail}</p>
      <p>Son message est : {message}</p>
   </div>
);

export default EmailTemplate;
