export const initializeGuestSession = () => {
    let sessionId = sessionStorage.getItem("sessionId");
    const userId = localStorage.getItem("user");

    if (!userId && !sessionId) {
      sessionId = generateSessionId(); // Esta función genera un ID único
      sessionStorage.setItem("sessionId", sessionId);
    }
  };

 export const generateSessionId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };