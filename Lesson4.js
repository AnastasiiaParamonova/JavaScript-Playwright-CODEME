try {
 functionThatDoesntExist();
} catch (error) {
 console.log("Wystąpił błąd:", error.message);
} finally {
 console.log("Zakończono blok try...catch");
}