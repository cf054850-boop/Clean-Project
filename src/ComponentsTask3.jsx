export default function BooksTable() {
 
  const books = [
    { id: 1, title: "מסילת ישרים", author: "רמח״ל", year: 1740, pages: 210, genre: "מוסר" },
    { id: 2, title: "חובת הלבבות", author: "רבנו בחיי", year: 1080, pages: 450, genre: "מחשבה ומוסר" },
    { id: 3, title: "הכוזרי", author: "רבי יהודה הלוי", year: 1140, pages: 380, genre: "מחשבת ישראל" },
    { id: 4, title: "שערי תשובה", author: "רבנו יונה", year: 1250, pages: 260, genre: "מוסר" }
  ];

  return (
    <div>
      <h2>רשימת ספרים</h2>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "right" }}>
        <thead>
          <tr>
            <th>מזהה</th>
            <th>שם הספר</th>
            <th>מחבר</th>
            <th>שנת חיבור/הוצאה</th>
            <th>מספר עמודים</th>
            <th>תחום</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}