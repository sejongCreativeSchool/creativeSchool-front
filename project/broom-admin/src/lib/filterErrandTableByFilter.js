export const filterErrandTableByFilter = (
  errands,
  input,
  category,
  progress
) => {
  console.log(errands, input, category, progress);
  let tempErrands = errands.filter(
    (errand) => category.indexOf(errand.category) > -1
  );

  if (tempErrands.length === 0) {
    return [];
  }

  console.log(tempErrands);

  tempErrands = tempErrands.filter(
    (errand) =>
      (errand.done === true && progress.indexOf("done") > -1) ||
      (errand.done === false && progress.indexOf("notDone") > -1)
  );

  if (tempErrands.length === 0) {
    return [];
  }

  tempErrands = tempErrands.filter((errand) => {
    if (errand.desc.indexOf(input) === undefined) {
      return false;
    }
    if (errand.user.name.indexOf(input) === undefined) {
      return false;
    }
    if (
      errand.desc.indexOf(input) > -1 ||
      errand.user.name.indexOf(input) > -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  return tempErrands;
};
