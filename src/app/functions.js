export function deepCopy(obj)
{
  return JSON.parse(JSON.stringify(obj));
}
export function selectedState(selected)
{
  return selected ? ' selected' : '';
}
export function hiddenState(hidden)
{
  return hidden ? ' hidden' : '';
}