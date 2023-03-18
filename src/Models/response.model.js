
const NotFound = {
  message: "No pudimos encontrar lo solicitado",
  data: {}
}

const RegisterSuccess = {
  message: "El usuario se ha registrado correctamente",
  data: {}
}

const RegisterError = {
  message: "El usuario ya está en uso"
}

const RequestSuccess = {
  message: "La solicitud se completó correctamente",
  data: {}
}

const ErrorOcurred = {
  message: "Ha ocurrido un error, por favor verifique los datos e inténtelo de nuevo en unos minutos",
  data: {}
}

const UpdateCommentSuccess = {
  message: "El comentario se editó correctamente",
  data: {}
}

const MakeCommentSuccess = {
  message: "Se hizo un comentario correctamente",
  data: {}
}

const DeleteCommentSuccess = {
  message: "El comentario se eliminó correctamente",
  data: {}
}

const AnswerCommentSuccess = {
  message: "El comentario ha sido respondido correctamente",
  data: {}
}

const EditInfoSuccess = {
  message: "Los datos se actualizaron correctamente",
  data: {}
}

const LoginSuccess = {
  message: "Inicio de sesión correcto"
}

const LoginError = {
  Code: "Login Failed",
  message: "El usuario o la contraseña no son correctos"
}

const EmailSuccess = {
  message: "Email encontrado con éxito"
}

const EmailError = {
  Code: "Not Found Email",
  message: "Email no encontrado"
}

const RecoverySuccess = {
  Code: "Recovery Success",
  message: "Se actualizó la contraseña correctamente"
}

const RecoveryError = {
  Code: "Recovery Error",
  message: "No se pudo actualizar la contraseña",
}

module.exports = {
  NotFound,
  RequestSuccess,
  ErrorOcurred,
  RegisterSuccess,
  UpdateCommentSuccess,
  MakeCommentSuccess,
  DeleteCommentSuccess,
  AnswerCommentSuccess,
  EditInfoSuccess,
  LoginSuccess,
  LoginError,
  RegisterError,
  EmailSuccess,
  EmailError,
  RecoverySuccess,
  RecoveryError
};