import PouchDB from 'pouchdb';

export class DBlocal {
  static db = null;

  static async inicializa () {
    DBlocal.db = new PouchDB('satrapia');


    /*
    DBlocal.db.get('usuarios_ausias').then(function (doc) {return DBlocal.db.remove(doc);});
    DBlocal.db.get('usuarios_makoki').then(function (doc) {return DBlocal.db.remove(doc);});
    */
    /*
    const docU1 = {'_id': 'usuarios_makoki', 'usuario': 'makoki', 'clave': 'ikokam', 'nivel': 2}; DBlocal.db.put(docU1);
    const docU2 = {'_id': 'usuarios_ausias', 'usuario': 'ausias', 'clave': 'saisua', 'nivel': 1}; DBlocal.db.put(docU2);
    */


   // DBlocal.db.get('jugador').then(function (doc) {return DBlocal.db.remove(doc);});
   // const doc = {'_id': 'jugador', 'usuario': 'makoki'}; DBlocal.db.put(doc);

  }

  static numRegistros(cadena: string) {
    return DBlocal.db.allDocs(
      {
       include_docs: true,
       attachments: true,
       startkey: cadena,
       endkey: cadena + '\ufff0'
      }
    ).then( function (entries) {
      return entries.rows.length; } );
  }

  static getRegistro(registro) {
    return DBlocal.db.get(registro);
  }

}
