import { useState, useEffect } from "react"
import { Table, Input, Container, Button } from "reactstrap"
const Creative = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3001/service?category=creative")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Container>
      <Table bordered>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Название
            </th>
            <th>
              Цена
            </th>
            <th>
              Выбрано
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>Записаться</Button>
    </Container>
    );
  }
}

export default Creative