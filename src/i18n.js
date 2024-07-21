import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      contact: 'Contact',
      name: 'Name:',
      email: 'Email:',
      question: 'Question:',
      send: 'Send',
      faq: 'Frequently Asked Questions',
      q1: 'Q: How can I contact customer support for assistance?',
      a1: 'A: If you have any questions, concerns, or need assistance, you can reach our friendly support team via email at contact@gamewave.com or by calling our helpline at +1 (555) 123-4567 during our business hours.',
      q2: 'Q: How can I purchase games on GameWave?',
      a2: 'A: To purchase games, navigate to the "Game" section, browse the available titles, and select the game you want. Click on the "Buy Now" button, and you\'ll be guided through the secure checkout process to complete your purchase.',
      q3: 'Q: Can I refund a game if I change my mind after purchase?',
      a3: 'A: Game refunds are subject to the individual game developers\' refund policies. Generally, if you encounter any issues with your purchase, please contact our support team, and we\'ll do our best to assist you.',
      messageSent: 'Message sent successfully!',
    },
  },
  fr: {
    translation: {
      contact: 'Contact',
      name: 'Nom:',
      email: 'Email:',
      question: 'Question:',
      send: 'Envoyer',
      faq: 'Questions Fréquemment Posées',
      q1: 'Q: Comment puis-je contacter le support client pour obtenir de l\'aide?',
      a1: 'R: Si vous avez des questions, des préoccupations ou besoin d\'assistance, vous pouvez contacter notre équipe d\'assistance sympathique par email à contact@gamewave.com ou en appelant notre ligne d\'assistance au +1 (555) 123-4567 pendant nos heures d\'ouverture.',
      q2: 'Q: Comment puis-je acheter des jeux sur GameWave?',
      a2: 'R: Pour acheter des jeux, accédez à la section "Jeux", parcourez les titres disponibles et sélectionnez le jeu que vous souhaitez. Cliquez sur le bouton "Acheter maintenant", et vous serez guidé à travers le processus de paiement sécurisé pour compléter votre achat.',
      q3: 'Q: Puis-je rembourser un jeu si je change d\'avis après l\'achat?',
      a3: 'R: Les remboursements de jeux sont soumis aux politiques de remboursement des développeurs de jeux individuels. En général, si vous rencontrez des problèmes avec votre achat, veuillez contacter notre équipe d\'assistance, et nous ferons de notre mieux pour vous aider.',
      messageSent: 'Message envoyé avec succès!',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;



