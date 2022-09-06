function firstErrorOriginal() {
  throw new Error(`First error`);
}

function secondErrorOriginal() {
  try {
    firstError()
  } catch (error) {
    throw new Error('Second error');
  }
}

function thirdErrorOriginal() {
    try {
      createError();
    } catch (error) {
      throw new Error('Third error');
    }
}


function firstError() {
  throw new Error(`First error`, {cause: "1"});
}

function createError() {
  try {
    firstError()
  } catch (error) {
    throw new Error(`Second error ${error.cause}`, {cause: error.cause});
  }
}

function errorClause() {
    try {
      createError();

    } catch (error) {
      throw new Error(`Third error ${error.cause}`, {cause: error});
    }
}
