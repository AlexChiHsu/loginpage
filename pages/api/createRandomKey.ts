

//CreateSaltKey

export function createRandomKey(

  size: number = 5

): string {

  const byteArray = crypto.getRandomValues(new Uint8Array(size));

  return convertToBase64(byteArray);

}



export async function createPasswordHash(

  password: string,

  saltkey: string

): Promise<string> {

  const byteArray = new TextEncoder().encode(password.concat(saltkey));

  const passwordHash = await createHash(byteArray);

  return passwordHash;

}

async function createHash(

  byteArray: Uint8Array

): Promise<string> {

  const hash = await crypto.subtle.digest(hashType.SHA512, byteArray); //do SHA512

  const hashByte = Array.from(new Uint8Array(hash)); //ArrayBuffer轉換成Uint8Array(byte)

  const hashHex = hashByte.map((b) => b.toString(16).padStart(2, '0')).join(''); //Byte to Hex

  return hashHex;

}


function convertToBase64(

  byteArray: Uint8Array | ArrayBuffer

): string {

  return Buffer.from(byteArray).toString('base64');

}

enum hashType {

  SHA256 = 'SHA-256',

  SHA384 = 'SHA-384',

  SHA512 = 'SHA-512'

}