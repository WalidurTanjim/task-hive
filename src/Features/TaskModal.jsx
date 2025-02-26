import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const TaskModal = ({ isOpen, closeModal, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");

 
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setCategory(initialData.category || "To-Do");
    } else {
     
      setTitle("");
      setDescription("");
      setCategory("To-Do");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      category,
      ...(initialData && { _id: initialData._id }),
    });
    closeModal();
  };

  return (
    <div>
      <input type="checkbox" id="task-modal" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="task-modal"
            className="absolute right-4 top-4 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            <AiOutlineClose className="w-6 h-6" />
          </label>

          <h3 className="text-lg font-bold">{initialData ? "Edit Task" : "Add New Task"}</h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={50}
                required
                className="input input-bordered w-full mt-1"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
                rows={3}
                className="textarea textarea-bordered w-full mt-1"
                placeholder="Enter task description (optional)"
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                {initialData ? "Save Changes" : "Add Task"}
              </button>
              <button type="button" className="btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
