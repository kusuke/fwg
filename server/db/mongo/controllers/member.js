import googleAuthorize from '../../../../app/fetch-data/googleAuthorize';

export function all(req, res) {
  googleAuthorize().getSheetData().then((result)=>{
    return res.json({
      ...result
    });
  });
}

export default {
  all
};
