import { create } from "zustand";

interface ModelState {
  object_to_edit: any;
  set_object_to_edit: (data: any) => void;
  old_object_to_edit: any;
  set_old_object_to_edit: (data: any) => void;
  object_ids: any;
  set_object_ids: (data: any) => void;
  param_to_send: any;
  set_param_to_send: (data: any) => void;
}

export const useObjectToEdit = create<ModelState>((set) => ({
  object_to_edit: null,
  set_object_to_edit: (data) => set(() => ({ object_to_edit: data })),
  old_object_to_edit: null,
  set_old_object_to_edit: (data) => set(() => ({ old_object_to_edit: data })),
  object_ids: [],
  set_object_ids: (data) => set(() => ({ object_ids: data })),
  param_to_send: {},
  set_param_to_send: (data) => set(() => ({ param_to_send: data })),
}));
