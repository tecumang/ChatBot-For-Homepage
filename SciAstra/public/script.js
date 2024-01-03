// public/script.js
document.addEventListener('DOMContentLoaded', function () {
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');

  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
  }

  function botResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("what services does sciastra provide?")) {
      return "SciAstra provides a range of services including prepare all 4 subjects- PCMB for crack IAT, NEST, JEE, NEET, Boards & so on..";
    } else if (lowerCaseInput.includes("tell me more about sciastra's research areas.")) {
      return "SciAstra focuses on research areas such as IISC, IISER, NISER, ISI, CMI, IACS, CEBS.";
    } else if (lowerCaseInput.includes("what courses does sciastra provide?")) {
      return "SciAstra Provide 1rs Courses, PhD & internship, Books, CUET,IISc, IISERc, NISER, ISI, and Many more Courses. ";
    } else if (lowerCaseInput.includes("what are the key features of sciastra?")) {
      return "Key Features of SciAstra are  Faculties, Results,study Material, and Excellence Mentors.";
    } else if (lowerCaseInput.includes("can you explain sciastra's mission?")) {
      return "SciAstra's mission is to provide a dynamic educational platform that fosters curiosity, critical thinking, and hands-on exploration in these scientific disciplines, preparing students for successful careers.";
    } else if (lowerCaseInput.includes("can you explain sciastra's vision?")) {
      return "Vision of SciAstra is to create a global community of learners driven by curiosity, innovation, and a commitment to advancing scientific understanding, ultimately shaping a world.";
    } else if (lowerCaseInput.includes("tell me about sciastra's team.")) {
      return "SciAstra have a team of Scientists, Research Scholars from the top of Institutes in the World";
    } else if (lowerCaseInput.includes("what resources does sciastra offer for students?")) {
      return "SciAstra have many materials lke Free mock tests, PYQs, Study materials, Exam Analysis, Lectures and Internship";
    } else if (lowerCaseInput.includes("are they have any web stories of sciastra?")) {
      return "SciAstra Create many web Stories , you can explore them on https://www.sciastra.com/blog/web-stories/  this website";
    } else if (lowerCaseInput.includes("are there any job opportunities at sciastra?")) {
      return "Check our Careers page for the latest job opportunities at SciAstra.";
    } else if (lowerCaseInput.includes("tell me about sciastra's alumni.")) {
      return "Some Alumni of SciAstra are Adrash V Rank 1(IAT 2021),Adityarup Laha AIR-12 ISI, You can explore more Alumi of SciAstra at https://alumni.sciastra.com/";
    } else if (lowerCaseInput.includes("how can i contact the support team at sciastra?")) {
      return "If you have any query so please drop your query on email support@sciastra.com";
    } else if (lowerCaseInput.includes("where are sciastra incorporated?")) {
      return "SciAstra located at Bhubaneswar, Odisha";
    } else if (lowerCaseInput.includes("blog published by sciastra.")) {
      return "Yes, You can Check blogs related to SciAstra here https://www.sciastra.com/blog/";
    } else if (lowerCaseInput.includes("what educational programs does sciastra offer?")) {
      return "Explore our https://www.sciastra.com/courses/ for information on educational programs.";
    } else if (lowerCaseInput.includes("hii")) {
      return "Hello I am SciAstra Chatbot , How can i Assist you today?";
    }else {
      return "I'm sorry, I don't have an answer for that right now.";
    }
  }

  function processUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('You', userMessage);

    const botReply = botResponse(userMessage.toLowerCase());
    appendMessage('SciAstra Bot', botReply);

    userInput.value = '';
  }

  userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      processUserInput();
    }
  });
});