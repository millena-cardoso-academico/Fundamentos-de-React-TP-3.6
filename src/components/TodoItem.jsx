import PropTypes from 'prop-types';

const TodoItem = ({ task }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
    </div>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TodoItem;
